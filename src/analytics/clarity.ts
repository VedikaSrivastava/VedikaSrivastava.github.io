import Clarity from '@microsoft/clarity';

let initialized = false;

export function initClarity() {
  const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID;

  if (!projectId || initialized) {
    return;
  }

  Clarity.init(projectId);
  initialized = true;
}
