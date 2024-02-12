export const insertScrtiptToAllTabs = async (
  func: (...args: any[]) => void,
  args: any[],
) => {
  const tabs = await chrome.tabs.query({});

  tabs.forEach(async (tab) => {
    if (!tab.id) return;

    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func,
        args,
      });
    } catch (error) {}
  });
};
