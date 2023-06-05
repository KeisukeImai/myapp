import ReactDOM from 'react-dom/client';
import App from './App';
import { worker } from './__tests__/mocks/apis';

// client開発モードの場合はmswを起動
if (import.meta.env.VITE_CLIENT_ONLY) {
  await (async (): Promise<void> => {
    await worker.start();
  })();
}

// StrictModeを有効にした場合、
// useEffectによる初期表示処理等が重複して実行されてしまい、
// 想定外の動作になる可能性があるた解除する
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
