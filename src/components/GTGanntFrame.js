import React, { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
//import Row from 'react-bootstrap/Row';
//npm install --save react-frame-component
//import Frame from 'react-frame-component';

// https://dev.to/ekeijl/rendering-react-components-inside-a-frame-5gn1
// class Frameset extends React.Component {
//     constructor(props) {
//         super(props);
//         this.ref = React.createRef();
//     }
//     componentDidMount() {
//         if (this.props.cols) {
//             this.ref.current.setAttribute("cols", this.props.cols);
//         }
//         if (this.props.rows) {
//             this.ref.current.setAttribute("rows", this.props.rows);
//         }
//     }
//     render() {
//         return (
//             <frameset ref={this.ref}>{this.props.children}</frameset>
//         );
//     }
// }

export default function GTGanntFrame() {
  const [gtGanntLoad, setGtGanntLoad] = useState(false);

  useEffect(() => {
    if (!gtGanntLoad) {
      setGtGanntLoad(true)
    }
  }, [gtGanntLoad])

  return (    
    <>
    {/* <Frameset rows="100%" cols="100%" key={true}> */}
    {/* http://htmlbook.ru/samhtml/freymy/sozdanie-freymov */}
    { 
        !gtGanntLoad ? 
        <Loading /> :
        <frameset>
          <frame src="/CTGannt/gantt.html" name="ganntFrame" scrolling="yes" noresize />
        </frameset>
    }
    {/* </Frameset> */}
    </>
  );
}

function Loading() {

    return (
      <>
        <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
        />{' '}
        Загрузка...
      </>
    );
  }
