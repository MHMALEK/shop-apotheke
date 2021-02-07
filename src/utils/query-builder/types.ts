interface queryBuilderPayloadInterface {
  date: string;
  sort?: string;
  language?: string;
}

type queryBuilderType = (payload: queryBuilderPayloadInterface) => string;
export default queryBuilderType;
