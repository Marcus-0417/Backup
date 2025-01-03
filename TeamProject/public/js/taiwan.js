function togglePopoverWithDynamicPosition(event, id) {
  const targetPopover = document.getElementById(id);
  const button = event.target;

  // Close popover if already open
  if (targetPopover.style.display === 'block') {
    targetPopover.style.display = 'none';
    button.classList.remove('active'); // 移除 active 樣式
    document.removeEventListener('click', closeOnOutsideClick);
    return;
  }

  // Position the popover near the button
  const buttonOffsetTop = button.offsetTop;
  const buttonOffsetLeft = button.offsetLeft;

  targetPopover.style.display = 'block';
  targetPopover.style.top = `${buttonOffsetTop + button.offsetHeight + 5}px`; // 5px margin below the button
  targetPopover.style.left = `${buttonOffsetLeft}px`; // Align with button's left edge

  button.classList.add('active'); // 添加 active 樣式

  // Function to close the popover on outside click
  function closeOnOutsideClick(e) {
    if (!e.target.closest(`#${id}`) && !e.target.closest('button')) {
      targetPopover.style.display = 'none';
      button.classList.remove('active'); // 確保關閉時移除 active 樣式
      document.removeEventListener('click', closeOnOutsideClick);
    }
  }

  // Add event listener to detect clicks outside the popover
  document.addEventListener('click', closeOnOutsideClick);
}

function toggleButtonState(button) {
  // 檢查按鈕是否已經有 active 樣式
  if (button.classList.contains('active')) {
    // 移除 active 樣式，恢復原色
    button.classList.remove('active');
  } else {
    // 添加 active 樣式，維持 hover 的效果
    button.classList.add('active');
  }
}