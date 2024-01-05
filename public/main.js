const images = document.querySelectorAll('.card.event-details .event-img');

for (const image of images) {
  let label = image.getAttribute('src').split('/');
  label = label[label.length - 1];
  label = label.split('.jpg')[0];

  image.outerHTML = '<a href="https://members.wework.com/workplaceone/content2/wework-events/details?uuid=' + label + '">' + image.outerHTML + '</a>';

}

window.scroll({ top: 0, behavior: 'smooth' });

