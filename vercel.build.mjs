import { execSync } from 'child_process';
import { rmSync, existsSync } from 'fs';

// Clean the dist directory if it exists
if (existsSync('./dist')) {
  rmSync('./dist', { recursive: true });
}

// Run the build
console.log('Building the application...');
execSync('npm run build', { stdio: 'inherit' });

// Verify the build output
if (!existsSync('./dist')) {
  throw new Error('Build failed: dist directory not created');
}

console.log('Build completed successfully!'); 