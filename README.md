# Convert Davinci Resolve Markers To YouTube Timestamps

## Setup

Just run `npm i`

## Usage

1. Export Davinci Resolve markers to the folder named `file` and ensure that is the only file in that folder other than `.keep`
    * Add markers to the timeline at specific timestamps
    * In the top left corner click **Edit Index** next to **Effects Library** in order to expose the edit index
    * Click the 3 dots in the top right corner of the edit index and change the view to be **Show Markers**
      * If you use markers for other things besides timestamps then just use a specific color marker for timestamps and only show that color marker in the edit index before exporting
    * Right click your timeline in the **Media Pool** (most likely called **Timeline 1**)
    * Inside the right click menu navigate to **Timelines** > **Export** > **Edit Index**
    * Save the file as CSV with any name to the `file` folder in this repository
2. Run `node script.js`
    * This will output the timestamps and copy them to your clipboard
    * If you have no introduction timestamp (00:00) it will add one for you with the name **Introduction**
    * This will also output either 00:00 or 00:00:00 timestamps depending on how long the video is

## Example Output

```
00:00 - Nick Introduction
00:53 - Rules
01:56 - Question 1
02:18 - Question 2
04:10 - Question 3
04:29 - Question 4
05:26 - Question 5
05:55 - Question 6
06:50 - Question 7
07:12 - Question 8
09:18 - Question 9
12:24 - Question 10
13:55 - Question 11
14:56 - Question 12
16:24 - Question 13
17:20 - Question 14
21:30 - Pushups
```