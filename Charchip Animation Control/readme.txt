Created by Query for SRPG Studio! Free for use, credit would be rad but this is basically just editing existing options haha

Super basic plugin to put more weight on sprites 0 and 2 of charchip animations (or otherwise alter the . Applies to every charchip afaik?

Thanks to MarkyJoe for his SRPG Studio programming tutorial: https://youtu.be/9P9KSILvg0Q
as well as Silas (crimeanarchivist#5925) in the SRPG Studio University discord for helping me find what to edit.

DISCLAIMER: This plugin is SUPER SIMPLE and I'm also not very good at programming!! If you have any questions feel free to DM me in the SRPG Studio University discord.

HOW TO USE:
Drop this in your Plugins folder to use it. If you want to customize:

Edit the number in "this._counter.setCounterInfo(6);" to set how long each sprite in the animation stays on screen (default in SRPG Studio is 14, set to 6 here)
Edit the array in UnitCounter._getAnimationArray to set up the order in which the animation's sprites display. 0 is the first sprite, 1 is the second, 2 is the third. Default is 0, 1, 2, 1. Set up here to emphasize 0 and 2.

(everything else in the script is just the defaults)