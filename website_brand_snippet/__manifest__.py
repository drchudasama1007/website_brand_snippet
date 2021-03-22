# -*- coding: utf-8 -*-
##############################################################################
#
# Copyright 2018 Odoo Helper
# See LICENSE file for full copyright and licensing details.
#
##############################################################################
{
    'name': 'Website Brand',
    'category': 'Website',
    'summary': 'Website Brand',

    'version': '0.1',
    'description': """
Website Brand
==================
        This module allows Create Brands and Assign Brand To Products. Website Snippet for Brand which is put in any page and also Brand Wise Filter of Products.
        """,

    'author': 'Odoo Helper',
    'license': 'AGPL-3',

    'depends': [
        'website', 'website_sale'
        ],
    'data': [
        'security/ir.model.access.csv',
        'views/assets.xml',
        'views/product_brand_ept.xml',
        'views/snippet.xml',
    ],
    'images': ['images/OdooHelper.jpg'],
    'price': 18.28,
    'currency': 'USD',

    'installable': True,
    'application': False
}
