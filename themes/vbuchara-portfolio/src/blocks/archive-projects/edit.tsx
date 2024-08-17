import { type BlockEditProps } from "@wordpress/blocks";
import { useSelect } from "@wordpress/data";
import { store as coreStore, type GetRecordsHttpQuery } from "@wordpress/core-data";
import type { ProjectPost } from "wordpress-types";

import { EditorWrapper } from "@components/editor-wrapper";
import { ProjectItem } from "./components/project-item";

export type ArchiveProjectsEditComponentProps = BlockEditProps<{}>;

export function EditComponent(props: ArchiveProjectsEditComponentProps){
    const { attributes, setAttributes } = props;

    const projects = useSelect((select) => {
        return select(coreStore).getEntityRecords("postType", "project", {
            context: "view",
            per_page: -1,
        } satisfies GetRecordsHttpQuery) as ProjectPost[] | null;
    }, []);

    return (
    <EditorWrapper>
        <div className="portfolio-archive-projects">
            {projects?.map((project) => (
            <ProjectItem
                key={project.id}
                project={project}
            />
            ))}
        </div>
    </EditorWrapper>
    );
}