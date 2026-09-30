import { Annotation } from "@langchain/langgraph";

export type FileReview = {
  filePath: string;
  fileType: string;
  syntaxDiagnostics: string;
  reviewResult: string;
};

export const ReviewStateAnnotation = Annotation.Root({
  filePaths: Annotation<string[]>(),
  currentFilePath: Annotation<string>(),
  currentFileContent: Annotation<string>(),
  currentFileType: Annotation<string>(),

  fileReviews: Annotation<FileReview[]>({
    reducer: (existing, update) => existing.concat(update),
    default: () => []
  }),

  frameworkSummary: Annotation<string>(),
  finalReport: Annotation<string>()
});

export type ReviewState = typeof ReviewStateAnnotation.State;