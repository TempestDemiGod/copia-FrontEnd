

export function Boton({texto, link}) {
		return (
			<>
				<a href={link}>{texto}</a>
						</>
		)
}
/* const links = [
	{
		texto: 'texto',
		link: 'link'
	},
	{
		texto: 'texto',
		link: 'link'
	},
	{
		texto: 'texto',
		link: 'link'
	},
	{
		texto: 'texto',
		link: 'link'
	}
]

links.map((link) => (
	<Boton key={link.texto} texto={link.texto} function={link.link}/>
))
<Boton texto='Brainstorming' function={'http://chilecabor.com'}/>
<Boton texto='CHileno gosu' function={'http://chilecabor.com'}/>
<Boton texto='Lucho cabro' function={'http://chilecabor.com'}/> */