export const insertScrtiptToActiveTab = async (
  func: (...args: any[]) => void,
  args: any[],
) => {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  if (!tab.id) return;
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func,
    args,
  });
};
