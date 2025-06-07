(() => {
    "use strict";
    kb.event.on('kb.view.load.complete', (event) => {
        console.log(event);
        const filterButton = document.querySelector('button.kb-icon.kb-icon-filter');
        const filterContainer = document.querySelector('.kb-echo-header-filter');
        
        if (filterButton && filterContainer) {
            filterContainer.appendChild(filterButton);
        }

        document.querySelectorAll('.kb-guide').forEach(elem => {
            // 元のテキストを「日時, カテゴリ, タイトル」に分割
            const [dateStr, category, title] = elem.textContent.split(',').map(s => s.trim());
        
            // 日時（ISO文字列）をDateに変換
            const date = new Date(dateStr);
            const rawHours = date.getHours();
            // 午前/午後を判定し、12時間制の時刻に変換
            const period = rawHours < 12 ? '午前' : '午後';
            let hours = rawHours % 12;
            hours = hours === 0 ? 12 : hours;
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const time = `${period} ${hours}:${minutes}`;
        
            // 要素のテキストを「午前/午後 時:分 タイトル」に置き換え
            elem.textContent = `${time} ${title}`;
        
            // カテゴリに対応するクラスを追加（例: category-会議）
            const className = `category-${category}`;
            elem.classList.add(className);
        });
        
        return event;
    });
})();