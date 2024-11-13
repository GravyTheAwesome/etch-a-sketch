const body = document.querySelector('body');

const grid = document.createElement('div');
grid.classList.add('grid');
body.appendChild(grid);

for (let i = 0; i < 16; i++) {
    const grid_row = document.createElement('div');
    grid_row.classList.add('grid-row');
    grid.appendChild(grid_row);
    for (let j = 0; j < 16; j++) {
        const grid_square = document.createElement('div');
        grid_square.classList.add('grid-square');
        grid_row.appendChild(grid_square);
    }
}

const grid_squares = document.querySelectorAll('.grid-square');
grid_squares.forEach((grid_square) => {
    grid_square.addEventListener('mouseover', () => {grid_square.style.backgroundColor = 'black'});
})