import { TagsRepositories } from "../repositories/TagsRepositories";
import { getCustomRepository } from "typeorm"

class CreateTagService {
    async execute( name : string) {
        const tagsRepository = getCustomRepository(TagsRepositories);
        if (!name) throw new Error("Tag incorrect");

        const tagAlreadyExists = await tagsRepository.findOne({ name })
        if (tagAlreadyExists) throw new Error("Tag already exists");

        const tag = tagsRepository.create({ name })

        return tag;
    }
}

export { CreateTagService }