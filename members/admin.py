from members.models import Member, Group, NextOfKin

__author__ = 'mark'
from django.contrib import admin


class MemberAdmin(admin.ModelAdmin):
    list_display = ('member_name', 'email')

    def username(self, Member):
        return Member.user.username

    def first_name(self, Member):
        return Member.user.first_name

    def last_name(self, Member):
        return Member.user.last_name

    def email(self, Member):
        return Member.user.email


admin.site.register(Member, MemberAdmin)


class GroupAdmin(admin.ModelAdmin):
    pass
admin.site.register(Group, GroupAdmin)


class NextOfKinAdmin(admin.ModelAdmin):
    pass
admin.site.register(NextOfKin, NextOfKinAdmin)
