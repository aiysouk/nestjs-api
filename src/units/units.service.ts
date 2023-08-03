import { Injectable } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Injectable()
export class UnitsService {
  create(createUnitDto: CreateUnitDto) {
    return {
      message: 'create new one'
    }
  }

  findAll() {
    return {
      message: 'find all method.'
    }
  }

  findOne(id: number) {
    return {
      messsage: 'find one with id ' + id
    }
  }

  update(id: number, updateUnitDto: UpdateUnitDto) {
    return {
      message: 'update one with id ' + id
    }
  }

  remove(id: number) {
    return {
      message: 'remove one with id ' + id
    }
  }
}
