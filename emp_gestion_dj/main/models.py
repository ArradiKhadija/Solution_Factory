from django.db import models

# Create your models here.
class Employee(models.Model):
    id=models.AutoField(primary_key=True)
    nomComplet = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    contact = models.CharField(max_length=100)
    adresse = models.TextField()
    poste= models.TextField(null=True)
    

    def __str__(self):
        return str(self.nomComplet)

#creer en oracle sous forme de table: main_tribe
class Tribe(models.Model):
    id_trb = models.CharField(primary_key=True, max_length=10)
    intitule_trb = models.CharField(max_length=200)
    resp_trb = models.ForeignKey(Employee, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.intitule_trb


class Vacation(models.Model):
    id_vac = models.AutoField(primary_key=True)
    id_emp_vac = models.ForeignKey(Employee, null=True, on_delete=models.CASCADE)# on_delete nous permet de supprimer tous les congés si un employée est supprimé cascade****
    type_vac=models.CharField(max_length=200, null=True)    
    start_vac=models.DateField()
    end_vac=models.DateField()
    duration_vac=models.IntegerField()
    reason_vac=models.CharField(max_length=200, null=True)
    approbateur_vac=models.CharField(max_length=200)

    def __str__(self):
        return self.id_vac

class Equipe(models.Model):
    id_eq = models.AutoField(primary_key=True)
    nom_eq = models.CharField(max_length=200, null=True, default="non renseigné")
    resp_eq = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    start_eq = models.DateField(max_length=200, null=True, default="non renseigné")
    project_run = models.CharField(max_length=200, null=True, default="L'équipe vient de débuter récemment")
    emp_eq = models.ManyToManyField(Employee, related_name='equipes', blank=True)

    def __str__(self):
        return self.nom_eq