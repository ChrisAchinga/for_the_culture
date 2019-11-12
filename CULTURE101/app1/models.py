from django.db import models

class Route(models.Model):
    rte_Name = models.CharField(max_length=100)
    rte_Destination1 = models.CharField(max_length=100)
    rte_Destination2 = models.CharField(max_length=100)
    rte_via = models.CharField(max_length=100, default='')

    class Meta:
        verbose_name_plural = "Available Routes"

    def __str__(self):
        return self.rte_Name

class Saccos(models.Model):
    sacco_name = models.CharField(max_length=100)
    sacco_ID = models.CharField(max_length=100) 
    sacco_HQ = models.CharField(max_length=100)
    sacco_Leader = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "The Sacco"

    def __str__(self):
        return self.sacco_name

class Duty(models.Model):
    dty_name = models.CharField(max_length=100)
    dty_description = models.TextField(max_length=350)

    class Meta:
        verbose_name_plural = "Crew Duties"

    def __str__(self):
        return self.dty_name 

class Crew(models.Model):
    crw_fName = models.CharField(max_length=100)
    crw_lName = models.CharField(max_length=100)
    crw_Location = models.CharField(max_length=100)
    crw_Phone = models.CharField(max_length=100)
    crw_Duty = models.ForeignKey(Duty, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "The Crew"

    def __str__(self):
        return self.crw_fName +' ' +self.crw_lName

