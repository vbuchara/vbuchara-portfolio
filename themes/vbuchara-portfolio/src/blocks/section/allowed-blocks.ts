const { default: welcomeContainerBlock } = await import("@blocks/welcome-container/block.json") as BlockJsonDefault;
const { default: containerBlock } = await import("@blocks/container/block.json") as BlockJsonDefault;
const { default: imageBlock } = await import("@blocks/image/block.json") as BlockJsonDefault;
const { default: headingBlock } = await import("@blocks/heading/block.json") as BlockJsonDefault;
const { default: paragraphBlock } = await import("@blocks/paragraph/block.json") as BlockJsonDefault;
const { default: buttonBlock } = await import("@blocks/button/block.json") as BlockJsonDefault;
const { default: skillsBlock } = await import("@blocks/skills/block.json") as BlockJsonDefault;
const { default: projectsBlock } = await import("@blocks/projects/block.json") as BlockJsonDefault;
const { default: archiveHeaderBlock } = await import("@blocks/archive-header/block.json") as BlockJsonDefault;
const { default: archiveProjectsBlock } = await import("@blocks/archive-projects/block.json") as BlockJsonDefault;
const { default: archiveSkillsBlock } = await import("@blocks/archive-skills/block.json") as BlockJsonDefault;
const { default: experiencesBlock } = await import("@blocks/experiences/block.json") as BlockJsonDefault;

export const sectionAllowedBlocks = [
    welcomeContainerBlock.name,
    containerBlock.name,
    imageBlock.name,
    headingBlock.name,
    paragraphBlock.name,
    buttonBlock.name,
    skillsBlock.name,
    projectsBlock.name,
    archiveHeaderBlock.name,
    archiveProjectsBlock.name,
    archiveSkillsBlock.name,
    experiencesBlock.name
];