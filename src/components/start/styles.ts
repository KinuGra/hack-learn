export const styles = {
  container: {
    fontFamily: 'var(--font-sans)',
    textAlign: 'center' as const,
    padding: '40px',
    backgroundColor: '#121212', // 黒基調
    color: '#e0e0e0', // 薄いグレー
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const, // 型アサーションを追加
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#1e1e1e', // 黒に近い背景
    borderBottom: '1px solid #6a1b9a', // 薄い紫のアクセント
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    color: '#b39ddb', // 薄い紫
  },
  hamburgerIcon: {
    fontSize: '24px',
  },
  settingsIcon: {
    fontSize: '24px',
  },
  menu: {
    position: 'fixed' as const,
    top: '0',
    left: '0',
    width: '250px',
    height: '100%',
    backgroundColor: '#1e1e1e', // 黒に近い背景
    color: '#e0e0e0', // 薄いグレー
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#6a1b9a', // 薄い紫
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px',
  },
  settingsMenu: {
    position: 'fixed' as const,
    top: '0',
    right: '0',
    width: '700px',
    height: '100%',
    backgroundColor: '#1e1e1e', // 黒に近い背景
    color: '#e0e0e0', // 薄いグレー
    boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  settingsCloseButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#6a1b9a', // 薄い紫
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px',
  },
  menuList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  menuItem: {
    padding: '10px 0',
    fontSize: '18px',
    color: '#b39ddb', // 薄い紫
    cursor: 'pointer',
    borderBottom: '1px solid #333', // 黒基調に合うボーダー
    textAlign: 'center' as const, // 型アサーションを追加
    width: '150px',
    height: '40px',
    lineHeight: '40px',
    display: 'block',
    margin: '0 auto',
  },
  header: {
    backgroundColor: '#1e1e1e', // 黒に近い背景
    color: 'var(--foreground)',
    padding: '30px 0',
    borderBottom: '6px solid #6a1b9a', // 薄い紫のアクセント
  },
  title: {
    margin: 0,
    fontSize: '72px',
    fontWeight: 'bold',
    color: '#b39ddb', // 薄い紫
  },
  introSection: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  introTitle: {
    fontSize: '48px',
    color: '#b39ddb', // 薄い紫
    margin: '20px 0',
    fontWeight: 'bold',
  },
  introDescription: {
    fontSize: '24px',
    color: '#e0e0e0', // 薄いグレー
  },
  main: {
    marginTop: '40px',
  },
  description: {
    fontSize: '24px',
    marginBottom: '30px',
    color: '#b39ddb', // 薄い紫
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '30px',
  },
  buttonWrapper: {
    textAlign: 'center' as const,
  },
  button: {
    padding: '20px 40px',
    fontSize: '20px',
    backgroundColor: '#6a1b9a', // 薄い紫
    color: '#e0e0e0', // 薄いグレー
    border: '3px solid #b39ddb', // 薄い紫のボーダー
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    fontWeight: 'bold',
  },
  languageDescription: {
    marginTop: '15px',
    fontSize: '18px',
    color: '#2e7d32',
  },
  footer: {
    marginTop: '50px',
    fontSize: '18px',
    color: '#b39ddb', // 薄い紫
    fontWeight: 'bold',
  },
};