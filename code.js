const body = document.querySelector('body');
const clear_button = document.querySelector('.clear-button');
const grid = document.createElement('div');
const random_button = document.querySelector('.random-button');
const normal_button = document.querySelector('.normal-button');
const shading_button = document.querySelector('.shading-button');
let grid_size = 16;
let grid_row;
let grid_square;
let random_red;
let random_blue;
let random_green;
let shading_on = 'false';
let pen_colour = 'normal';

grid.classList.add('grid');
body.appendChild(grid);

function checkPenColour(element) {
    switch (pen_colour) {
        case 'normal':
            let shading = 0;
            element.addEventListener('mouseover', () => {
                element.style.backgroundColor = 'black'    
                if (shading_on == 'true') {
                    shading += 0.1;
                    element.style.opacity = shading;
                } else {
                    element.style.opacity = 1;
                }
            });
            break;
        case 'random':
            element.addEventListener('mouseover', () => {
                random_red = Math.floor(Math.random() * 256);
                random_blue = Math.floor(Math.random() * 256);
                random_green = Math.floor(Math.random() * 256);
                element.style.backgroundColor = "#"+(random_red).toString(16)+(random_blue).toString(16)+(random_green).toString(16);
            });
            break;
    }
}

for (let i = 0; i < grid_size; i++) {
    grid_row = document.createElement('div');
    grid_row.classList.add('grid-row');
    grid.appendChild(grid_row);
    for (let j = 0; j < grid_size; j++) {
        grid_square = document.createElement('div');
        grid_square.classList.add('grid-square');
        grid_row.appendChild(grid_square);
    }
}

const grid_squares = document.querySelectorAll('.grid-square');
grid_squares.forEach(grid_square => {
    checkPenColour(grid_square);
});    

clear_button.addEventListener('click', () => {
    grid_size = Number(prompt('How big should the grid be?'));
    if (grid_size <= 100 && grid_size >= 1)  {
        document.querySelectorAll('.grid-row').forEach(e => e.remove());
        document.querySelectorAll('.grid-square').forEach(e => e.remove());
        for (let i = 0; i < grid_size; i++) {
            grid_row = document.createElement('div');
            grid_row.classList.add('grid-row');
            grid.appendChild(grid_row);
            for (let j = 0; j < grid_size; j++) {
                grid_square = document.createElement('div');
                grid_square.classList.add('grid-square');
                grid_row.appendChild(grid_square);
            }
        }
        
        const grid_squares = document.querySelectorAll('.grid-square');
        grid_squares.forEach(grid_square => {
            checkPenColour(grid_square);
        });    
    }
});

random_button.addEventListener('click', () => {
    const grid_squares = document.querySelectorAll('.grid-square');
    grid_squares.forEach(grid_square => 
        grid_square.addEventListener('mouseover', () => {
            random_red = Math.floor(Math.random() * 256);
            random_blue = Math.floor(Math.random() * 256);
            random_green = Math.floor(Math.random() * 256);
            grid_square.style.backgroundColor = "#"+(random_red).toString(16)+(random_blue).toString(16)+(random_green).toString(16);
        }));

    pen_colour = 'random';
});

normal_button.addEventListener('click', () => {
    const grid_squares = document.querySelectorAll('.grid-square');
    grid_squares.forEach(grid_square => 
        grid_square.addEventListener('mouseover', () => {
            grid_square.style.backgroundColor = 'black';
        }));

    pen_colour = 'normal';
});

shading_button.addEventListener('click', () => {
    if (shading_on == 'true') {
        shading_on = 'false';
    } else {
        shading_on = 'true';
    };
    console.log(shading_on)
});
