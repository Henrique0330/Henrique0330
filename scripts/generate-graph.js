const { execSync } = require('child_process');

execSync('npx pacman-graph --output ./output', { stdio: 'inherit' });
console.log('✅ Pacman graph generated!');
