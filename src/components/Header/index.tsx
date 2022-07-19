import './index.scss';
import SvgIcon from '../SvgIcon';
import logoSrc from '@/assets/images/header.jpg';

const icons = import.meta.globEager('@/assets/icons/icon-*.svg');
const iconUrls = Object.values(icons).map((mod) => {
  const fileName = mod.default.split('/').pop();
  const [svgName] = fileName.split('.');
  return svgName;
});

export function Header() {
  return (
    <header className="mts-header">
      this is header
      <section>
        <img src={logoSrc} />
      </section>
      {iconUrls.map((item) => (
        <SvgIcon
          name={item}
          key={item}
          width="50"
          height="50"
          prefix={'icon'}
          color={'red'}
        />
      ))}
    </header>
  );
}
