from odoo import api, fields, models
from odoo.tools.translate import _
from datetime import date, datetime, timedelta
from odoo.http import request 
 
class website(models.Model):
    _inherit = "website"

    def get_brand(self, products=False):
        """
        This function is used to search the list of brand data
        :return: List of brand
        """

        if products:
            shop_brands = self.env['product.brand.ept'].sudo().search([('product_ids', 'in', products.ids), ('products_count', '>', 0),('website_id', 'in', (False, self.get_current_website().id))])
        else:
            shop_brands = self.env['product.brand.ept'].sudo().search(
                [('website_published', '=', True), ('products_count', '>', 0),
                 ('website_id', 'in', (False, self.get_current_website().id))])
        return shop_brands
	
