export default function decorate(block) {
    console.log('Decorating ImageText Block:', block);
  
    const ul = document.createElement('ul');
    [...block.children].forEach((row) => {
      const li = document.createElement('li');
      moveInstrumentation(row, li);
      
      while (row.firstElementChild) li.append(row.firstElementChild);
  
      [...li.children].forEach((div) => {
        if (div.children.length === 1 && div.querySelector('picture')) {
          div.className = 'imagetext-card-image';
        } else {
          div.className = 'imagetext-card-body';
        }
      });
  
      ul.append(li);
    });
  
    ul.querySelectorAll('picture > img').forEach((img) => {
      const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
      moveInstrumentation(img, optimizedPic.querySelector('img'));
      img.closest('picture').replaceWith(optimizedPic);
    });
  
    block.textContent = '';
    block.append(ul);
  
    console.log('ImageText Block decorated successfully.');
  }
  