// DOM読み込み完了後に実行するコード
window.addEventListener('DOMContentLoaded', () => {
  // 要素の順番を変更する JavaScript コード
  const filterButton = document.querySelector('button.kb-icon.kb-icon-filter');
  const filterContainer = document.querySelector('.kb-echo-header-filter');
  
  if (filterButton && filterContainer) {
    filterContainer.appendChild(filterButton);
  }
});
