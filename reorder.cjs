const fs = require('fs');
const path = require('path');

function moveSection(filePath, sectionStartMarker, sectionEndMarker, targetInsertBefore) {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Find section
    let startIndex = content.indexOf(sectionStartMarker);
    if (startIndex === -1) {
        console.log(`Could not find start marker in ${filePath}: ${sectionStartMarker}`);
        return;
    }
    
    // Search from startIndex to ensure we get the right end marker
    let endIndex = content.indexOf(sectionEndMarker, startIndex);
    if (endIndex === -1) {
        console.log(`Could not find end marker in ${filePath}: ${sectionEndMarker}`);
        return;
    }
    
    let sectionCode = content.substring(startIndex, endIndex);
    
    // Remove the section from original place
    content = content.substring(0, startIndex) + content.substring(endIndex);
    
    // Insert the section before targetInsertBefore
    let insertIndex = content.indexOf(targetInsertBefore);
    if (insertIndex === -1) {
        console.log(`Could not find insert target in ${filePath}: ${targetInsertBefore}`);
        return;
    }
    
    content = content.substring(0, insertIndex) + sectionCode + '\n      ' + content.substring(insertIndex);
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Successfully moved section in ${filePath}`);
}

// 1. VirtualToursService.jsx
moveSection(
    path.join(__dirname, 'src/pages/VirtualToursService.jsx'),
    '{/* Sample Virtual Tour Project */}',
    '{/* Key Benefits of 3DMania Virtual Tours */}',
    '{/* Why 360 Virtual Tours Matter Section */}'
);

// 2. DroneServices.jsx
moveSection(
    path.join(__dirname, 'src/pages/DroneServices.jsx'),
    '{/* Sample Drone Project */}',
    '{/* Industries We Serve */}',
    '{/* Why Drone Visuals Matter Section */}'
);

// 3. GoogleStreetViewService.jsx
moveSection(
    path.join(__dirname, 'src/pages/GoogleStreetViewService.jsx'),
    '{/* Sample Project Showcase Section */}',
    '{/* Industries We Serve Section */}', // this comes right after it
    '{/* Why Google Street View Matters Section */}'
);

// 4. DroneSurveyService.jsx
moveSection(
    path.join(__dirname, 'src/pages/DroneSurveyService.jsx'),
    '{/* Sample Survey Project */}',
    '{/* Industries We Serve */}', // this comes right after it
    '{/* Why Drone Survey & Mapping Matters Section */}'
);
