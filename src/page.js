export default function page() {
  const header = document.createElement('div');
  document.body.appendChild(header);
  header.classList.add('header');

  const content = document.createElement('div');
  document.body.appendChild(content);
  content.classList.add('content');

  const footer = document.createElement('div');
  document.body.appendChild(footer);
  footer.classList.add('footer');
}
