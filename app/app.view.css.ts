namespace $.$$ {

	$mol_style_define( $toxic_app, {
	
		'--mol_theme_hue': '180deg',
	
		Menu: {
			flex: {
				basis: '15rem',
			},
		},

		Placeholder: {
			maxWidth: '15rem',
		},

		Issues_page: {
			flex: {
				basis: '50rem',
			},
			margin: [ 0, 'auto' ],
		},

		Issue: {
			padding: $mol_gap.block,
		},

		Issue_main: {
			flex: {
				wrap: 'wrap',
			},
			justify: {
				content: 'flex-end',
			},
			gap: $mol_gap.block,
		},

		Issue_name: {
			textShadow: '0 0',
			flex: {
				grow: 1,
			},
		},

		Issue_type: {
			color: $mol_theme.shade,
		},

		Issue_date: {
			color: $mol_theme.shade,
		},

	})

}
