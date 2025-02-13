export default function decorate(block) {
  const [imagetextWrapper] = block.children;
  const blockquote = document.createElement('blockquote'); 
  blockquote.textContent = imagetextWrapper.textContent.trim();  
  imagetextWrapper.replaceChildren(blockquote);
}
 
