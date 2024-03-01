export const insertScrtiptToActiveTab = async (
  func: (...args: any[]) => void,
  args: any[],
) => {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  if (!tab || !tab.id) return;
  const results = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func,
    args,
  });

  return results[0].result;
};
