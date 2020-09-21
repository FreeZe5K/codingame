/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

// game loop
while (true) {
    let pos = 0; // Position of the mountain
    let max = 0; // Max height

    // Iterate over the mountains
    for (let i = 0; i < 8; i++) {
        // The height of the mountain
        const mountainH = parseInt(readline());

        // Check if the current height is larger than the max
        if (mountainH >= max) {
            pos = i;            // Set the position to the current mountain
            max = mountainH;    // Set the max height to the current mountain's height
        }
    }

    // The index of the mountain to fire on.
    console.log(pos);
}
