import { Affix, Button, Transition, rem } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { Link } from 'react-router-dom';

export default function NextPageAffix({
  isMobile,
  Icon,
  text,
  to,
}: {
  isMobile: boolean | undefined;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  to: string;
}) {
  const [scroll, _] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition
        transition="slide-up"
        mounted={document.body.scrollHeight - (isMobile ? 1150 : 1300) < scroll.y}
      >
        {(transitionStyles) => (
          <Button
            leftSection={<Icon style={{ width: rem(16), height: rem(16) }} />}
            style={transitionStyles}
            component={Link}
            to={to}
          >
            {text}
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
