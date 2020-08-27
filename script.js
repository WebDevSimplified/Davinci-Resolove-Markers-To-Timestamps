const fs = require('fs')
const csv = require('csv-parser')
const clipboardy = require('clipboardy')

async function main() {
  const file = fs.readdirSync('file').filter(f => f !== '.keep')[0]
  const promise = new Promise(resolve => {
    const markers = []
    fs.createReadStream(`file/${file}`)
      .pipe(csv())
      .on('data', data => markers.push(formatMarkerData(data)))
      .on('end', () => resolve(markers))
  })
  
  let markers = await promise
  if (markers.every(marker => {
    const parts = marker.start.split(':')
    return parseInt(parts[0]) === 0
  })) {
    markers = markers.map(marker => {
      const [_hour, ...rest] = marker.start.split(':')
      return { ...marker, start: rest.join(':') }
    })
  }
  if (!markers[0].start.split(':').every(part => parseInt(part) === 0)) {
    const parts = markers[0].start.split(':').map(p => '00')
    markers = [{ name: 'Introduction', start: parts.join(':') }, ...markers]
  }

  const output = markers.map(({ name, start }) => {
    return `${start} - ${name}`
  }).join('\n')
  console.log(output)
  console.log('\nCopied To Clipboard')
  clipboardy.writeSync(output)
}

function formatMarkerData(data) {
  const timestampParts = data["Source In"].split(':')
  const hourTime = parseInt(timestampParts[0]) - 1
  if (hourTime < 10) {
    timestampParts[0] = `0${hourTime}`
  } else {
    timestampParts[0] = hourTime.toString()
  }
  timestampParts.length = 3

  return {
    start: timestampParts.join(':'),
    name: data.Notes
  }
}

main()