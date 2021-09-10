class FileMd5 {

}


class FileHttp {

}

class FileUpLoad {
    static SIZE: number = 10 * 1024 * 1024; // 切片大小

    public file: File;

    public server: FileHttp

    public md5 : FileMd5

    constructor() {
    }
}