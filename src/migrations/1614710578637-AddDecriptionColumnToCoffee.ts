import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDecriptionColumnToCoffee1614710122619
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `ALTER TABLE "coffee" ADD COLUMN "description" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
  }
}
