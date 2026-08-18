let initialized = false;

export async function initClarity() {
  const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID;

  if (!projectId || initialized) {
    return;
  }

  const { default: Clarity } = await import('@microsoft/clarity');
  Clarity.init(projectId);
  initialized = true;
}
