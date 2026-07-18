export const Icon = ({ name, className = 'w-6 h-6' }) => {
  const common = { className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.6 }
  switch (name) {
    case 'bolt':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"/></svg>
    case 'chart':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M4 19V9m6 10V5m6 14v-7m6 7V11"/></svg>
    case 'shield':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3 4.5 6v6c0 4.5 3 7.7 7.5 9 4.5-1.3 7.5-4.5 7.5-9V6L12 3Z"/><path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4"/></svg>
    case 'plug':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v5m6-5v5M7 8h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V8Zm5 8v5"/></svg>
    case 'table':
      return <svg {...common}><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><path strokeLinecap="round" d="M3.5 9.5h17M8.5 4.5v15"/></svg>
    case 'chat':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a8 8 0 1 1-3.2-6.4L21 4l-1 4.2A7.9 7.9 0 0 1 21 12Z"/><path strokeLinecap="round" d="M8 11h.01M12 11h.01M16 11h.01"/></svg>
    case 'doc':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M7 3.5h7L18 8v12.5H7z"/><path strokeLinecap="round" d="M14 3.5V8h4M9.5 13h5M9.5 16.5h5"/></svg>
    case 'bell':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9Z"/><path strokeLinecap="round" d="M10 19a2 2 0 0 0 4 0"/></svg>
    case 'server':
      return <svg {...common}><rect x="4" y="4" width="16" height="6" rx="1.4"/><rect x="4" y="14" width="16" height="6" rx="1.4"/><path strokeLinecap="round" d="M7.5 7h.01M7.5 17h.01"/></svg>
    case 'link':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M10 14a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 0 0-5.7-5.7l-1.4 1.4M14 10a4 4 0 0 0-5.7 0L6 12.6a4 4 0 0 0 5.7 5.7l1.4-1.4"/></svg>
    case 'gauge':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M4 15a8 8 0 1 1 16 0"/><path strokeLinecap="round" d="M12 15 15.5 10"/><path strokeLinecap="round" d="M12 15h.01"/></svg>
    case 'arrow':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h13.5M12.5 6l6.5 6-6.5 6"/></svg>
    case 'check':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7"/></svg>
    case 'cloud':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 9.5 4 4 0 0 0 7 18Z"/></svg>
    case 'brain':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5a2.5 2.5 0 0 0-2.5 2.5v.3A2.7 2.7 0 0 0 5 9.8v1.4a2.7 2.7 0 0 0-1 2.1v.5A2.7 2.7 0 0 0 6.7 17H9V4.5Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 4.5a2.5 2.5 0 0 1 2.5 2.5v.3a2.7 2.7 0 0 1 1.5 2.5v1.4a2.7 2.7 0 0 1 1 2.1v.5A2.7 2.7 0 0 1 17.3 17H15V4.5Z"/><path strokeLinecap="round" d="M9 17v2.5M15 17v2.5"/></svg>
    case 'target':
      return <svg {...common}><circle cx="12" cy="12" r="7.5"/><circle cx="12" cy="12" r="3.8"/><path strokeLinecap="round" d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3"/></svg>
    case 'radio':
      return <svg {...common}><circle cx="12" cy="12" r="2"/><path strokeLinecap="round" d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.5 5.5a9 9 0 0 0 0 13M18.5 5.5a9 9 0 0 1 0 13"/></svg>
    case 'building':
      return <svg {...common}><rect x="5" y="3.5" width="9" height="17" rx="1"/><path strokeLinecap="round" d="M14 9.5h5v11h-5M8 7h1M11 7h1M8 10.5h1M11 10.5h1M8 14h1M11 14h1"/></svg>
    case 'flask':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M10 3.5h4M10 3.5v6L5.5 18a1.6 1.6 0 0 0 1.4 2.5h10.2a1.6 1.6 0 0 0 1.4-2.5L14 9.5v-6"/><path strokeLinecap="round" d="M8 15.5h8"/></svg>
    default:
      return null
  }
}
