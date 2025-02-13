export default function decorate(block) {
  const [textWrapper] = default-content-wrapper.children;
  const blockquote = document.createElement('text-wrapper');  
  blockquote.textContent = textWrapper.textContent.trim();  
  textWrapper.replaceChildren(blockquote);
}
 
