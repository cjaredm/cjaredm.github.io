import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import '../assets/scss/main.scss';
import Modal from './Modal';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      isModalVisible: false,
      loading: 'is-loading',
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    });
  }

  setModal = modal => this.setState({ modal });

  render() {
    const { children } = this.props;

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        } ${this.state.modal ? 'modal-is-visible' : ''}`}
      >
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          {typeof children === 'function'
            ? children({ setModal: this.setModal })
            : children}
          <Footer />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
        <Modal close={() => this.setModal(null)} children={this.state.modal} />
      </div>
    );
  }
}
