export class Skill {
    id?: number;
    nombreSkill: string; nivel: number;

constructor( nombreSkill?: string, nivel?: number) {
       this.nombreSkill = nombreSkill;
    this.nivel = nivel;
}

}
