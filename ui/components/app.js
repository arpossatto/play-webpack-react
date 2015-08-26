var React = require('react');
var Button = require('./button');

module.exports = React.createClass({

	render() {
		return (
			<div className='container'>
				<h1>Projeto Base Play + ReactJS with Webpack</h1>
				<p>Este é um teste de aplicativo combinado ReactJS com Play Framework</p>
				<p>Abaixo está o exemplo com alguns botões</p>
				<Button btnClass='info' icon='zoom-in'>Visualizar</Button>
				<Button btnClass='primary' icon='pencil'>Editar</Button>
				<Button btnClass='danger' icon='trash'>Excluir</Button>
				<Button btnClass='success' icon='plus'>Incluir</Button>
			</div>
		);
	}
});
