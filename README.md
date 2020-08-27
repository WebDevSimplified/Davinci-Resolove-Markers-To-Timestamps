# Convert Davinci Resolve Markers To YouTube Timestamps

## Setup

Just run `npm i`

## Usage

1. Export Davinci Resolve markers to the folder named `file` and ensure that is the only file in that folder other than `.keep`
    * Add markers to the timeline at specific timestamps
    * In the top left corner click **Edit Index** next to **Effects Library** in order to expose the edit index
    * Click the 3 dots in the top right corner of the edit index and change the view to be **Show Markers**
    * Right click your timeline in the **Media Pool** (most likely called **Timeline 1**)
    * Inside the right click menu navigate to **Timelines** > **Export** > **Edit Index**
    * Save the file with any name to the `file` folder in this repository
2. Run `node script.js`
    * This will output the timestamps and copy them to your clipboard
    * If you have no introduction timestamp (00:00) it will add one for you with the name **Introduction**
    * This will also output either 00:00 or 00:00:00 timestamps depending on how long the video is