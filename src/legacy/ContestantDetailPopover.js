import React from "react";
import { Popover, Whisper, Loader, Button } from 'rsuite';

const DefaultPopover = React.forwardRef(({ content, ...props }, ref) => {
  return (
    <Popover ref={ref} title="Title" {...props}>
      <p>This is a Popover </p>
      <p>{content}</p>
    </Popover>
  ); 
});

const ContestantDetailPopover = React.forwardRef((props, ref) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Popover ref={ref} {...props}>
      {loading ? (<Loader content="Loading..." />) : props.content}
    </Popover>
  );
});

const CustomComponent = ({ placement, loading, children }) => (
  <Whisper
    trigger="click"
    placement={placement}
    controlId={`control-id-${placement}`}
    speaker={
      loading ? (
        <ContestantDetailPopover />
      ) : (
        <DefaultPopover content={`I am positioned to the ${placement}`} />
      )
    }
  >
    <Button appearance="subtle">{children || placement}</Button>
  </Whisper>
);
export default ContestantDetailPopover