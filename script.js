document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.horizontal-scroll-wrapper');
    
    wrapper.addEventListener('wheel', (e) => {
        e.preventDefault();
        wrapper.scrollLeft += e.deltaY;
    });

    document.querySelector('.read-more').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#content1').scrollIntoView({ behavior: 'smooth', inline: 'start' });
    });
});