export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 **/
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type File = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'publicURL' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___frontmatter___date' |
  'childMarkdownRemark___frontmatter___tags' |
  'childMarkdownRemark___frontmatter___keywords' |
  'childMarkdownRemark___frontmatter___slug' |
  'childMarkdownRemark___frontmatter___description' |
  'childMarkdownRemark___frontmatter___keyword' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___fileAbsolutePath' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___headingsDetail' |
  'childMarkdownRemark___headingsDetail___value' |
  'childMarkdownRemark___headingsDetail___id' |
  'childMarkdownRemark___headingsDetail___depth' |
  'childMarkdownRemark___headingsDetail___parents' |
  'childMarkdownRemark___headingsDetail___parents___value' |
  'childMarkdownRemark___headingsDetail___parents___id' |
  'childMarkdownRemark___headingsDetail___parents___depth' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type Internal = {
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export type MarkdownExcerptFormats = 
  'PLAIN' |
  'HTML' |
  'MARKDOWN';

export type MarkdownHeading = {
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MarkdownHeadingDetail = {
  value?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
  parents?: Maybe<Array<Maybe<MarkdownParentHeadingDetail>>>,
};

export type MarkdownHeadingDetailFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
  parents?: Maybe<MarkdownParentHeadingDetailFilterListInput>,
};

export type MarkdownHeadingDetailFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingDetailFilterInput>,
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>,
};

export type MarkdownHeadingLevels = 
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6';

export type MarkdownParentHeadingDetail = {
  value?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MarkdownParentHeadingDetailFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownParentHeadingDetailFilterListInput = {
  elemMatch?: Maybe<MarkdownParentHeadingDetailFilterInput>,
};

export type MarkdownRemark = Node & {
  id: Scalars['ID'],
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>,
  excerpt?: Maybe<Scalars['String']>,
  rawMarkdownBody?: Maybe<Scalars['String']>,
  fileAbsolutePath?: Maybe<Scalars['String']>,
  html?: Maybe<Scalars['String']>,
  htmlAst?: Maybe<Scalars['JSON']>,
  excerptAst?: Maybe<Scalars['JSON']>,
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead?: Maybe<Scalars['Int']>,
  tableOfContents?: Maybe<Scalars['String']>,
  wordCount?: Maybe<MarkdownWordCount>,
  headingsDetail?: Maybe<Array<Maybe<MarkdownHeadingDetail>>>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>,
  truncate?: Maybe<Scalars['Boolean']>
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>,
  pathToSlugField?: Maybe<Scalars['String']>,
  maxDepth?: Maybe<Scalars['Int']>,
  heading?: Maybe<Scalars['String']>
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous?: Maybe<MarkdownRemark>,
};

export type MarkdownRemarkFieldsEnum = 
  'id' |
  'frontmatter___title' |
  'frontmatter___date' |
  'frontmatter___tags' |
  'frontmatter___keywords' |
  'frontmatter___slug' |
  'frontmatter___description' |
  'frontmatter___keyword' |
  'excerpt' |
  'rawMarkdownBody' |
  'fileAbsolutePath' |
  'html' |
  'htmlAst' |
  'excerptAst' |
  'headings' |
  'headings___value' |
  'headings___depth' |
  'timeToRead' |
  'tableOfContents' |
  'wordCount___paragraphs' |
  'wordCount___sentences' |
  'wordCount___words' |
  'headingsDetail' |
  'headingsDetail___value' |
  'headingsDetail___id' |
  'headingsDetail___depth' |
  'headingsDetail___parents' |
  'headingsDetail___parents___value' |
  'headingsDetail___parents___id' |
  'headingsDetail___parents___depth' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  headingsDetail?: Maybe<MarkdownHeadingDetailFilterListInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Date']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  keyword?: Maybe<Array<Maybe<Scalars['String']>>>,
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  keyword?: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Query = {
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  markdownRemark?: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  headingsDetail?: Maybe<MarkdownHeadingDetailFilterListInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>,
  sort?: Maybe<MarkdownRemarkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export type SiteFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'siteMetadata___title' |
  'siteMetadata___authors' |
  'siteMetadata___authors___name' |
  'siteMetadata___authors___slug' |
  'port' |
  'host' |
  'polyfill' |
  'pathPrefix' |
  'buildTime';

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>,
  previous?: Maybe<SitePageContextPrevious>,
  next?: Maybe<SitePageContextNext>,
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>,
  previous?: Maybe<SitePageContextPreviousFilterInput>,
  next?: Maybe<SitePageContextNextFilterInput>,
};

export type SitePageContextNext = {
  frontmatter?: Maybe<SitePageContextNextFrontmatter>,
};

export type SitePageContextNextFilterInput = {
  frontmatter?: Maybe<SitePageContextNextFrontmatterFilterInput>,
};

export type SitePageContextNextFrontmatter = {
  date?: Maybe<Scalars['Date']>,
  description?: Maybe<Scalars['String']>,
  keyword?: Maybe<Array<Maybe<Scalars['String']>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type SitePageContextNextFrontmatterFilterInput = {
  date?: Maybe<DateQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  keyword?: Maybe<StringQueryOperatorInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextPrevious = {
  frontmatter?: Maybe<SitePageContextPreviousFrontmatter>,
};

export type SitePageContextPreviousFilterInput = {
  frontmatter?: Maybe<SitePageContextPreviousFrontmatterFilterInput>,
};

export type SitePageContextPreviousFrontmatter = {
  date?: Maybe<Scalars['Date']>,
  description?: Maybe<Scalars['String']>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
  slug?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  title?: Maybe<Scalars['String']>,
};

export type SitePageContextPreviousFrontmatterFilterInput = {
  date?: Maybe<DateQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  tags?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export type SitePageFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'path' |
  'internalComponentName' |
  'component' |
  'componentChunkName' |
  'isCreatedByStatefulCreatePages' |
  'context___slug' |
  'context___previous___frontmatter___date' |
  'context___previous___frontmatter___description' |
  'context___previous___frontmatter___keywords' |
  'context___previous___frontmatter___slug' |
  'context___previous___frontmatter___tags' |
  'context___previous___frontmatter___title' |
  'context___next___frontmatter___date' |
  'context___next___frontmatter___description' |
  'context___next___frontmatter___keyword' |
  'context___next___frontmatter___keywords' |
  'context___next___frontmatter___slug' |
  'context___next___frontmatter___tags' |
  'context___next___frontmatter___title' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___plugins' |
  'pluginCreator___pluginOptions___plugins___resolve' |
  'pluginCreator___pluginOptions___plugins___id' |
  'pluginCreator___pluginOptions___plugins___name' |
  'pluginCreator___pluginOptions___plugins___version' |
  'pluginCreator___pluginOptions___plugins___browserAPIs' |
  'pluginCreator___pluginOptions___plugins___ssrAPIs' |
  'pluginCreator___pluginOptions___plugins___pluginFilepath' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___name' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___classPrefix' |
  'pluginCreator___pluginOptions___showLineNumbers' |
  'pluginCreator___pluginOptions___noInlineHighlight' |
  'pluginCreator___pluginOptions___offsetY' |
  'pluginCreator___pluginOptions___icon' |
  'pluginCreator___pluginOptions___className' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___author' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___plugins' |
  'pluginOptions___plugins___resolve' |
  'pluginOptions___plugins___id' |
  'pluginOptions___plugins___name' |
  'pluginOptions___plugins___version' |
  'pluginOptions___plugins___pluginOptions___classPrefix' |
  'pluginOptions___plugins___pluginOptions___showLineNumbers' |
  'pluginOptions___plugins___pluginOptions___noInlineHighlight' |
  'pluginOptions___plugins___pluginOptions___offsetY' |
  'pluginOptions___plugins___pluginOptions___icon' |
  'pluginOptions___plugins___pluginOptions___className' |
  'pluginOptions___plugins___browserAPIs' |
  'pluginOptions___plugins___ssrAPIs' |
  'pluginOptions___plugins___pluginFilepath' |
  'pluginOptions___fileName' |
  'pluginOptions___name' |
  'pluginOptions___path' |
  'pluginOptions___classPrefix' |
  'pluginOptions___showLineNumbers' |
  'pluginOptions___noInlineHighlight' |
  'pluginOptions___offsetY' |
  'pluginOptions___icon' |
  'pluginOptions___className' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___author' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  fileName?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  classPrefix?: Maybe<Scalars['String']>,
  showLineNumbers?: Maybe<Scalars['Boolean']>,
  noInlineHighlight?: Maybe<Scalars['Boolean']>,
  offsetY?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  className?: Maybe<Scalars['String']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  fileName?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  classPrefix?: Maybe<StringQueryOperatorInput>,
  showLineNumbers?: Maybe<BooleanQueryOperatorInput>,
  noInlineHighlight?: Maybe<BooleanQueryOperatorInput>,
  offsetY?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  className?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  classPrefix?: Maybe<Scalars['String']>,
  showLineNumbers?: Maybe<Scalars['Boolean']>,
  noInlineHighlight?: Maybe<Scalars['Boolean']>,
  offsetY?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  className?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  classPrefix?: Maybe<StringQueryOperatorInput>,
  showLineNumbers?: Maybe<BooleanQueryOperatorInput>,
  noInlineHighlight?: Maybe<BooleanQueryOperatorInput>,
  offsetY?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  className?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>,
  authors?: Maybe<Array<Maybe<SiteSiteMetadataAuthors>>>,
};

export type SiteSiteMetadataAuthors = {
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataAuthorsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
};

export type SiteSiteMetadataAuthorsFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataAuthorsFilterInput>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  authors?: Maybe<SiteSiteMetadataAuthorsFilterListInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type IndexHogeQueryVariables = {};


export type IndexHogeQuery = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, allMarkdownRemark: { edges: Array<{ node: { frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'date' | 'description' | 'title' | 'tags' | 'slug'>> } }> } };

export type PostsForCreatePagesQueryVariables = {};


export type PostsForCreatePagesQuery = { allMarkdownRemark: { edges: Array<{ node: { frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'date' | 'description' | 'keyword' | 'keywords' | 'slug' | 'tags' | 'title'>> } }> } };

export type BlogPostQueryVariables = {
  slug: Scalars['String']
};


export type BlogPostQuery = { markdownRemark: Maybe<(
    Pick<MarkdownRemark, 'id' | 'html'>
    & { frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'date' | 'description' | 'slug' | 'tags' | 'title'>>, headingsDetail: Maybe<Array<Maybe<(
      Pick<MarkdownHeadingDetail, 'id' | 'value' | 'depth'>
      & { parents: Maybe<Array<Maybe<Pick<MarkdownParentHeadingDetail, 'id' | 'value' | 'depth'>>>> }
    )>>> }
  )> };
