(() => {
    "use strict";
    kb.event.on('kb.view.load.complete', (event) => {
        console.log(event);
        const filterButton = document.querySelector('button.kb-icon.kb-icon-filter');
        const filterContainer = document.querySelector('.kb-echo-header-filter');
        
        if (filterButton && filterContainer) {
            filterContainer.appendChild(filterButton);
        }
        return event;
    });
})();
