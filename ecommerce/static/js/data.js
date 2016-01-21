var itemHTML = '<div class="col"><div class="box item-box"><p class="item-name">%name%</p><p class="item-description">%description%</p><img class="item-img" src="static/img/%image%"><p class="item-price">$%price%</p></div></div>';

var categories = {
	'BLAZERS': [],
	'JEANS': ['Straight Jeans', 'Slim Jeans', 'Selvedge Denim'],
	'KNITWEAR': []
};

var colors = {
	'Black': '#262626',
	'Blue': '#3f7cc2',
	'Brown': '#9e724b',
	'Green': '#85bd52',
	'Orange': '#e38c2d',
	'Pink': '#c95fa4',
	'Gold': '#bb9b6c',
	'Purple': '#9775cd',
	'Red': '#d7535e',
	'White': '#dbe1e7'
};

var brands = [
	'A.P.C',
	'Acne',
	'Acronym',
	'Adidas',
	'ASICS',
	'Black Diamond',
	'Calvin Klein'
];

var sizes = ['S', 'M', 'L', 'XL', 'XXL'];

var inventory = {};
inventory.items = [
	{
		'name': 'Reversible Leather Bomber Jacket',
		'description': 'In hac habitasse plat.',
		'img_url': 'item1.png',
		'price': 2500
	},
	{
		'name': 'Reversible Leather Bomber Jacket',
		'description': 'In hac habitasse plat.',
		'img_url': 'item2.png',
		'price': 2500
	},
	{
		'name': 'Reversible Leather Bomber Jacket',
		'description': 'In hac habitasse plat.',
		'img_url': 'item3.png',
		'price': 2500
	},
	{
		'name': 'Reversible Leather Bomber Jacket',
		'description': 'In hac habitasse plat.',
		'img_url': 'item4.png',
		'price': 2500
	},
	{
		'name': 'Reversible Leather Bomber Jacket',
		'description': 'In hac habitasse plat.',
		'img_url': 'item5.png',
		'price': 2500
	},
	{
		'name': 'Reversible Leather Bomber Jacket',
		'description': 'In hac habitasse plat.',
		'img_url': 'item6.png',
		'price': 2500
	},
	{
		'name': 'Reversible Leather Bomber Jacket',
		'description': 'In hac habitasse plat.',
		'img_url': 'item7.png',
		'price': 2500
	},
	{
		'name': 'Reversible Leather Bomber Jacket',
		'description': 'In hac habitasse plat.',
		'img_url': 'item8.png',
		'price': 2500
	},
	{
		'name': 'Reversible Leather Bomber Jacket',
		'description': 'In hac habitasse plat.',
		'img_url': 'item9.png',
		'price': 2500
	},
	{
		'name': 'Reversible Leather Bomber Jacket',
		'description': 'In hac habitasse plat.',
		'img_url': 'item10.png',
		'price': 2500
	},
	{
		'name': 'Reversible Leather Bomber Jacket',
		'description': 'In hac habitasse plat.',
		'img_url': 'item11.png',
		'price': 2500
	},
	{
		'name': 'Reversible Leather Bomber Jacket',
		'description': 'In hac habitasse plat.',
		'img_url': 'item12.png',
		'price': 2500
	}
];

inventory.populateSite = function() {
	var formattedHtml = '';
	var numberOfItem = inventory.items.length;
	var jqItem = $("#items");
	for (var i = 0; i < numberOfItem; i++) {
		formattedHtml = itemHTML.replace('%name%',inventory.items[i].name);
		formattedHtml = formattedHtml.replace('%description%', inventory.items[i].description);
		formattedHtml = formattedHtml.replace('%price%', inventory.items[i].price);
		formattedHtml = formattedHtml.replace('%image%', inventory.items[i].img_url);
		jqItem.append(formattedHtml);
	}
};
