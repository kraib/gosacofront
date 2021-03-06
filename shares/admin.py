# Register your models here.
from django.contrib import admin

from shares.models import Shares, ShareType, SharePurchase, ShareTransfer


class ShareAdmin(admin.ModelAdmin):
    change_list_template = "admin/change_list_filter_sidebar.html"
    change_list_filter_template = "admin/filter_listing.html"
    list_display = ('member', 'share_type', 'number_of_shares', 'date')
    # search_fields = ['member']
    list_filter=['date','share_type']
    readonly_fields = ('member', 'share_type', 'number_of_shares', 'date')



class SharePurchaseAdmin(admin.ModelAdmin):
    change_list_template = "admin/change_list_filter_sidebar.html"
    change_list_filter_template = "admin/filter_listing.html"

    list_display = ('__unicode__', 'member', 'share_type', 'number_of_shares', 'date')
    search_fields = ('member', 'share_type', 'date')
    exclude = ('current_share_price',)

    list_display = ('member', 'share_type', 'number_of_shares')
    search_fields = ('member', 'share_type')
    exclude = ('current_share_price','date')


    def save_model(self, request, obj, form, change):
        SharePurchase.issue_shares(obj.member, obj.number_of_shares, obj.share_type)


class ShareTransferAdmin(admin.ModelAdmin):
    change_list_template = "admin/change_list_filter_sidebar.html"
    change_list_filter_template = "admin/filter_listing.html"
    list_display = ('__unicode__','seller', 'buyer', 'share_type', 'number_of_shares', 'date')
    exclude = ('current_share_price',)
    list_filter=['date','share_type']
    search_fields=['share_type']

    def save_model(self, request, obj, form, change):
        ShareTransfer.transfer_shares(obj.seller, obj.buyer, obj.number_of_shares, obj.share_type)



class ShareTypeAdmin(admin.ModelAdmin):
    change_list_template = "admin/change_list_filter_sidebar.html"
    change_list_filter_template = "admin/filter_listing.html"
    list_display=('share_class','share_price','minimum_shares','maximum_shares')
    list_filter=['share_class']
    search_fields=['share_class']


admin.site.register(Shares, ShareAdmin)
admin.site.register(SharePurchase, SharePurchaseAdmin)
admin.site.register(ShareTransfer, ShareTransferAdmin)
admin.site.register(ShareType, ShareTypeAdmin)

