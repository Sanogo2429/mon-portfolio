```mermaid
erDiagram
ut[utilisateur]{
int id PK
varchar nom
varchar prenom
varchar email
varchar mot_de_passe
varchar pseudo
int id_livre_favori FK
int id_recette_favori FK
int id_commentaire FK
}
ut||--||ru: a
ut||--o|lf: a
ut||--o|rf: a
p[pays] {
int id PK
string nom
}
p||--o|t: a
t[type] {
id int PK
string nom
int id_pays FK
}


s [sous_type] {
id int PK
string nom
int id_type FK
}
t ||--o| s : "possede"

r[recette] {
id int PK
string nom
text description
varchar image
text ingredients
varchar instruction
int temps_preparation
int id_pays FK
int id_type FK
int id_sous_type FK
}
s ||--o| r : "contient"
p ||--o| r : "contient"

rf[recette_favori]{
int id PK
int id_recette FK
int id_utilisateur FK
}
r||--o| rf : "est"
c[commentaire]{
int id PK
ind id_recette FK
int id_utilisateur FK
varchar contenu
}
r ||--o|c  : "a"
ut ||--o|c  : "peut faire"

l[livre]{
int id PK
varchar titre
varchar lien_telecharger
int nombre_page
date annee_publication
}
lf[livre_favori]{
int id PK
int id_livre FK
int id_utilisateur FK
}

l||--o| lf : "contient"
ca[categorie]{
int id PK
varchar title
}
ca ||--o| q :"a"

q[question]{
int id PK
int id_categorie FK
text proposition

}

q||--o|ru: a

rp[reponse_proposition]{
int id PK
varchar proposition
int id_question FK
}
q||--o|rp: a
ru[reponse_utilisateur]{
int id PK
int id_utlisateur FK
int id_question FK
int id_reponse_proposition FK
}
rp||--o|ru: a
```
