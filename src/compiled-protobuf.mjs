/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.FileDescriptorSet = (function() {

            /**
             * Properties of a FileDescriptorSet.
             * @memberof google.protobuf
             * @interface IFileDescriptorSet
             * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
             */

            /**
             * Constructs a new FileDescriptorSet.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorSet.
             * @implements IFileDescriptorSet
             * @constructor
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             */
            function FileDescriptorSet(properties) {
                this.file = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorSet file.
             * @member {Array.<google.protobuf.IFileDescriptorProto>} file
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             */
            FileDescriptorSet.prototype.file = $util.emptyArray;

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
             */
            FileDescriptorSet.create = function create(properties) {
                return new FileDescriptorSet(properties);
            };

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.file != null && message.file.length)
                    for (let i = 0; i < message.file.length; ++i)
                        $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.file && message.file.length))
                            message.file = [];
                        message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorSet message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorSet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.file != null && message.hasOwnProperty("file")) {
                    if (!Array.isArray(message.file))
                        return "file: array expected";
                    for (let i = 0; i < message.file.length; ++i) {
                        let error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                        if (error)
                            return "file." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
             */
            FileDescriptorSet.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorSet)
                    return object;
                let message = new $root.google.protobuf.FileDescriptorSet();
                if (object.file) {
                    if (!Array.isArray(object.file))
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                    message.file = [];
                    for (let i = 0; i < object.file.length; ++i) {
                        if (typeof object.file[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                        message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorSet
             * @static
             * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorSet.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.file = [];
                if (message.file && message.file.length) {
                    object.file = [];
                    for (let j = 0; j < message.file.length; ++j)
                        object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                }
                return object;
            };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorSet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorSet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorSet;
        })();

        protobuf.FileDescriptorProto = (function() {

            /**
             * Properties of a FileDescriptorProto.
             * @memberof google.protobuf
             * @interface IFileDescriptorProto
             * @property {string|null} [name] FileDescriptorProto name
             * @property {string|null} ["package"] FileDescriptorProto package
             * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
             * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
             * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
             * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
             * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
             * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
             * @property {string|null} [syntax] FileDescriptorProto syntax
             */

            /**
             * Constructs a new FileDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FileDescriptorProto.
             * @implements IFileDescriptorProto
             * @constructor
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             */
            function FileDescriptorProto(properties) {
                this.dependency = [];
                this.publicDependency = [];
                this.weakDependency = [];
                this.messageType = [];
                this.enumType = [];
                this.service = [];
                this.extension = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.name = "";

            /**
             * FileDescriptorProto package.
             * @member {string} package
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype["package"] = "";

            /**
             * FileDescriptorProto dependency.
             * @member {Array.<string>} dependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.dependency = $util.emptyArray;

            /**
             * FileDescriptorProto publicDependency.
             * @member {Array.<number>} publicDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.publicDependency = $util.emptyArray;

            /**
             * FileDescriptorProto weakDependency.
             * @member {Array.<number>} weakDependency
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.weakDependency = $util.emptyArray;

            /**
             * FileDescriptorProto messageType.
             * @member {Array.<google.protobuf.IDescriptorProto>} messageType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.messageType = $util.emptyArray;

            /**
             * FileDescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * FileDescriptorProto service.
             * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.service = $util.emptyArray;

            /**
             * FileDescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * FileDescriptorProto options.
             * @member {google.protobuf.IFileOptions|null|undefined} options
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.options = null;

            /**
             * FileDescriptorProto sourceCodeInfo.
             * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.sourceCodeInfo = null;

            /**
             * FileDescriptorProto syntax.
             * @member {string} syntax
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             */
            FileDescriptorProto.prototype.syntax = "";

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
             */
            FileDescriptorProto.create = function create(properties) {
                return new FileDescriptorProto(properties);
            };

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                if (message.dependency != null && message.dependency.length)
                    for (let i = 0; i < message.dependency.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                if (message.messageType != null && message.messageType.length)
                    for (let i = 0; i < message.messageType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (let i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.service != null && message.service.length)
                    for (let i = 0; i < message.service.length; ++i)
                        $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                    $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.publicDependency != null && message.publicDependency.length)
                    for (let i = 0; i < message.publicDependency.length; ++i)
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                if (message.weakDependency != null && message.weakDependency.length)
                    for (let i = 0; i < message.weakDependency.length; ++i)
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                return writer;
            };

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message["package"] = reader.string();
                        break;
                    case 3:
                        if (!(message.dependency && message.dependency.length))
                            message.dependency = [];
                        message.dependency.push(reader.string());
                        break;
                    case 10:
                        if (!(message.publicDependency && message.publicDependency.length))
                            message.publicDependency = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.publicDependency.push(reader.int32());
                        } else
                            message.publicDependency.push(reader.int32());
                        break;
                    case 11:
                        if (!(message.weakDependency && message.weakDependency.length))
                            message.weakDependency = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.weakDependency.push(reader.int32());
                        } else
                            message.weakDependency.push(reader.int32());
                        break;
                    case 4:
                        if (!(message.messageType && message.messageType.length))
                            message.messageType = [];
                        message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.service && message.service.length))
                            message.service = [];
                        message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.syntax = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message["package"] != null && message.hasOwnProperty("package"))
                    if (!$util.isString(message["package"]))
                        return "package: string expected";
                if (message.dependency != null && message.hasOwnProperty("dependency")) {
                    if (!Array.isArray(message.dependency))
                        return "dependency: array expected";
                    for (let i = 0; i < message.dependency.length; ++i)
                        if (!$util.isString(message.dependency[i]))
                            return "dependency: string[] expected";
                }
                if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                    if (!Array.isArray(message.publicDependency))
                        return "publicDependency: array expected";
                    for (let i = 0; i < message.publicDependency.length; ++i)
                        if (!$util.isInteger(message.publicDependency[i]))
                            return "publicDependency: integer[] expected";
                }
                if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                    if (!Array.isArray(message.weakDependency))
                        return "weakDependency: array expected";
                    for (let i = 0; i < message.weakDependency.length; ++i)
                        if (!$util.isInteger(message.weakDependency[i]))
                            return "weakDependency: integer[] expected";
                }
                if (message.messageType != null && message.hasOwnProperty("messageType")) {
                    if (!Array.isArray(message.messageType))
                        return "messageType: array expected";
                    for (let i = 0; i < message.messageType.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                        if (error)
                            return "messageType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (let i = 0; i < message.enumType.length; ++i) {
                        let error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    if (!Array.isArray(message.service))
                        return "service: array expected";
                    for (let i = 0; i < message.service.length; ++i) {
                        let error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (let i = 0; i < message.extension.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.FileOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                    let error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                    if (error)
                        return "sourceCodeInfo." + error;
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    if (!$util.isString(message.syntax))
                        return "syntax: string expected";
                return null;
            };

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
             */
            FileDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.FileDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object["package"] != null)
                    message["package"] = String(object["package"]);
                if (object.dependency) {
                    if (!Array.isArray(object.dependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                    message.dependency = [];
                    for (let i = 0; i < object.dependency.length; ++i)
                        message.dependency[i] = String(object.dependency[i]);
                }
                if (object.publicDependency) {
                    if (!Array.isArray(object.publicDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                    message.publicDependency = [];
                    for (let i = 0; i < object.publicDependency.length; ++i)
                        message.publicDependency[i] = object.publicDependency[i] | 0;
                }
                if (object.weakDependency) {
                    if (!Array.isArray(object.weakDependency))
                        throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                    message.weakDependency = [];
                    for (let i = 0; i < object.weakDependency.length; ++i)
                        message.weakDependency[i] = object.weakDependency[i] | 0;
                }
                if (object.messageType) {
                    if (!Array.isArray(object.messageType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                    message.messageType = [];
                    for (let i = 0; i < object.messageType.length; ++i) {
                        if (typeof object.messageType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                        message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (let i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.service) {
                    if (!Array.isArray(object.service))
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                    message.service = [];
                    for (let i = 0; i < object.service.length; ++i) {
                        if (typeof object.service[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                        message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                    message.extension = [];
                    for (let i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                }
                if (object.sourceCodeInfo != null) {
                    if (typeof object.sourceCodeInfo !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                    message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                }
                if (object.syntax != null)
                    message.syntax = String(object.syntax);
                return message;
            };

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileDescriptorProto
             * @static
             * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.dependency = [];
                    object.messageType = [];
                    object.enumType = [];
                    object.service = [];
                    object.extension = [];
                    object.publicDependency = [];
                    object.weakDependency = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object["package"] = "";
                    object.options = null;
                    object.sourceCodeInfo = null;
                    object.syntax = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message["package"] != null && message.hasOwnProperty("package"))
                    object["package"] = message["package"];
                if (message.dependency && message.dependency.length) {
                    object.dependency = [];
                    for (let j = 0; j < message.dependency.length; ++j)
                        object.dependency[j] = message.dependency[j];
                }
                if (message.messageType && message.messageType.length) {
                    object.messageType = [];
                    for (let j = 0; j < message.messageType.length; ++j)
                        object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (let j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.service && message.service.length) {
                    object.service = [];
                    for (let j = 0; j < message.service.length; ++j)
                        object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (let j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                    object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                if (message.publicDependency && message.publicDependency.length) {
                    object.publicDependency = [];
                    for (let j = 0; j < message.publicDependency.length; ++j)
                        object.publicDependency[j] = message.publicDependency[j];
                }
                if (message.weakDependency && message.weakDependency.length) {
                    object.weakDependency = [];
                    for (let j = 0; j < message.weakDependency.length; ++j)
                        object.weakDependency[j] = message.weakDependency[j];
                }
                if (message.syntax != null && message.hasOwnProperty("syntax"))
                    object.syntax = message.syntax;
                return object;
            };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FileDescriptorProto;
        })();

        protobuf.DescriptorProto = (function() {

            /**
             * Properties of a DescriptorProto.
             * @memberof google.protobuf
             * @interface IDescriptorProto
             * @property {string|null} [name] DescriptorProto name
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
             * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
             * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
             * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
             * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
             * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
             * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
             * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
             * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
             */

            /**
             * Constructs a new DescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a DescriptorProto.
             * @implements IDescriptorProto
             * @constructor
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             */
            function DescriptorProto(properties) {
                this.field = [];
                this.extension = [];
                this.nestedType = [];
                this.enumType = [];
                this.extensionRange = [];
                this.oneofDecl = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.name = "";

            /**
             * DescriptorProto field.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.field = $util.emptyArray;

            /**
             * DescriptorProto extension.
             * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extension = $util.emptyArray;

            /**
             * DescriptorProto nestedType.
             * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.nestedType = $util.emptyArray;

            /**
             * DescriptorProto enumType.
             * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.enumType = $util.emptyArray;

            /**
             * DescriptorProto extensionRange.
             * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.extensionRange = $util.emptyArray;

            /**
             * DescriptorProto oneofDecl.
             * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.oneofDecl = $util.emptyArray;

            /**
             * DescriptorProto options.
             * @member {google.protobuf.IMessageOptions|null|undefined} options
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.options = null;

            /**
             * DescriptorProto reservedRange.
             * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * DescriptorProto reservedName.
             * @member {Array.<string>} reservedName
             * @memberof google.protobuf.DescriptorProto
             * @instance
             */
            DescriptorProto.prototype.reservedName = $util.emptyArray;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
             */
            DescriptorProto.create = function create(properties) {
                return new DescriptorProto(properties);
            };

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.field != null && message.field.length)
                    for (let i = 0; i < message.field.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.nestedType != null && message.nestedType.length)
                    for (let i = 0; i < message.nestedType.length; ++i)
                        $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.enumType != null && message.enumType.length)
                    for (let i = 0; i < message.enumType.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.extensionRange != null && message.extensionRange.length)
                    for (let i = 0; i < message.extensionRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.extension != null && message.extension.length)
                    for (let i = 0; i < message.extension.length; ++i)
                        $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.oneofDecl != null && message.oneofDecl.length)
                    for (let i = 0; i < message.oneofDecl.length; ++i)
                        $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (let i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (let i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                return writer;
            };

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.field && message.field.length))
                            message.field = [];
                        message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        if (!(message.extension && message.extension.length))
                            message.extension = [];
                        message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.nestedType && message.nestedType.length))
                            message.nestedType = [];
                        message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.enumType && message.enumType.length))
                            message.enumType = [];
                        message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.extensionRange && message.extensionRange.length))
                            message.extensionRange = [];
                        message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.oneofDecl && message.oneofDecl.length))
                            message.oneofDecl = [];
                        message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 7:
                        message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                        break;
                    case 9:
                        if (!(message.reservedRange && message.reservedRange.length))
                            message.reservedRange = [];
                        message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                        break;
                    case 10:
                        if (!(message.reservedName && message.reservedName.length))
                            message.reservedName = [];
                        message.reservedName.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DescriptorProto message.
             * @function verify
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.field != null && message.hasOwnProperty("field")) {
                    if (!Array.isArray(message.field))
                        return "field: array expected";
                    for (let i = 0; i < message.field.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                        if (error)
                            return "field." + error;
                    }
                }
                if (message.extension != null && message.hasOwnProperty("extension")) {
                    if (!Array.isArray(message.extension))
                        return "extension: array expected";
                    for (let i = 0; i < message.extension.length; ++i) {
                        let error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                        if (error)
                            return "extension." + error;
                    }
                }
                if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                    if (!Array.isArray(message.nestedType))
                        return "nestedType: array expected";
                    for (let i = 0; i < message.nestedType.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                        if (error)
                            return "nestedType." + error;
                    }
                }
                if (message.enumType != null && message.hasOwnProperty("enumType")) {
                    if (!Array.isArray(message.enumType))
                        return "enumType: array expected";
                    for (let i = 0; i < message.enumType.length; ++i) {
                        let error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                        if (error)
                            return "enumType." + error;
                    }
                }
                if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                    if (!Array.isArray(message.extensionRange))
                        return "extensionRange: array expected";
                    for (let i = 0; i < message.extensionRange.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                        if (error)
                            return "extensionRange." + error;
                    }
                }
                if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                    if (!Array.isArray(message.oneofDecl))
                        return "oneofDecl: array expected";
                    for (let i = 0; i < message.oneofDecl.length; ++i) {
                        let error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                        if (error)
                            return "oneofDecl." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.MessageOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                    if (!Array.isArray(message.reservedRange))
                        return "reservedRange: array expected";
                    for (let i = 0; i < message.reservedRange.length; ++i) {
                        let error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                        if (error)
                            return "reservedRange." + error;
                    }
                }
                if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                    if (!Array.isArray(message.reservedName))
                        return "reservedName: array expected";
                    for (let i = 0; i < message.reservedName.length; ++i)
                        if (!$util.isString(message.reservedName[i]))
                            return "reservedName: string[] expected";
                }
                return null;
            };

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DescriptorProto} DescriptorProto
             */
            DescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DescriptorProto)
                    return object;
                let message = new $root.google.protobuf.DescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.field) {
                    if (!Array.isArray(object.field))
                        throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                    message.field = [];
                    for (let i = 0; i < object.field.length; ++i) {
                        if (typeof object.field[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                        message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                    }
                }
                if (object.extension) {
                    if (!Array.isArray(object.extension))
                        throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                    message.extension = [];
                    for (let i = 0; i < object.extension.length; ++i) {
                        if (typeof object.extension[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                        message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                    }
                }
                if (object.nestedType) {
                    if (!Array.isArray(object.nestedType))
                        throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                    message.nestedType = [];
                    for (let i = 0; i < object.nestedType.length; ++i) {
                        if (typeof object.nestedType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                        message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                    }
                }
                if (object.enumType) {
                    if (!Array.isArray(object.enumType))
                        throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                    message.enumType = [];
                    for (let i = 0; i < object.enumType.length; ++i) {
                        if (typeof object.enumType[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                        message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                    }
                }
                if (object.extensionRange) {
                    if (!Array.isArray(object.extensionRange))
                        throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                    message.extensionRange = [];
                    for (let i = 0; i < object.extensionRange.length; ++i) {
                        if (typeof object.extensionRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                        message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                    }
                }
                if (object.oneofDecl) {
                    if (!Array.isArray(object.oneofDecl))
                        throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                    message.oneofDecl = [];
                    for (let i = 0; i < object.oneofDecl.length; ++i) {
                        if (typeof object.oneofDecl[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                        message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                }
                if (object.reservedRange) {
                    if (!Array.isArray(object.reservedRange))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                    message.reservedRange = [];
                    for (let i = 0; i < object.reservedRange.length; ++i) {
                        if (typeof object.reservedRange[i] !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                        message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                    }
                }
                if (object.reservedName) {
                    if (!Array.isArray(object.reservedName))
                        throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                    message.reservedName = [];
                    for (let i = 0; i < object.reservedName.length; ++i)
                        message.reservedName[i] = String(object.reservedName[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DescriptorProto
             * @static
             * @param {google.protobuf.DescriptorProto} message DescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.field = [];
                    object.nestedType = [];
                    object.enumType = [];
                    object.extensionRange = [];
                    object.extension = [];
                    object.oneofDecl = [];
                    object.reservedRange = [];
                    object.reservedName = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.field && message.field.length) {
                    object.field = [];
                    for (let j = 0; j < message.field.length; ++j)
                        object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                }
                if (message.nestedType && message.nestedType.length) {
                    object.nestedType = [];
                    for (let j = 0; j < message.nestedType.length; ++j)
                        object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                }
                if (message.enumType && message.enumType.length) {
                    object.enumType = [];
                    for (let j = 0; j < message.enumType.length; ++j)
                        object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                }
                if (message.extensionRange && message.extensionRange.length) {
                    object.extensionRange = [];
                    for (let j = 0; j < message.extensionRange.length; ++j)
                        object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                }
                if (message.extension && message.extension.length) {
                    object.extension = [];
                    for (let j = 0; j < message.extension.length; ++j)
                        object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                if (message.oneofDecl && message.oneofDecl.length) {
                    object.oneofDecl = [];
                    for (let j = 0; j < message.oneofDecl.length; ++j)
                        object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                }
                if (message.reservedRange && message.reservedRange.length) {
                    object.reservedRange = [];
                    for (let j = 0; j < message.reservedRange.length; ++j)
                        object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                }
                if (message.reservedName && message.reservedName.length) {
                    object.reservedName = [];
                    for (let j = 0; j < message.reservedName.length; ++j)
                        object.reservedName[j] = message.reservedName[j];
                }
                return object;
            };

            /**
             * Converts this DescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.DescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            DescriptorProto.ExtensionRange = (function() {

                /**
                 * Properties of an ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IExtensionRange
                 * @property {number|null} [start] ExtensionRange start
                 * @property {number|null} [end] ExtensionRange end
                 * @property {google.protobuf.IExtensionRangeOptions|null} [options] ExtensionRange options
                 */

                /**
                 * Constructs a new ExtensionRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents an ExtensionRange.
                 * @implements IExtensionRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 */
                function ExtensionRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ExtensionRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.start = 0;

                /**
                 * ExtensionRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.end = 0;

                /**
                 * ExtensionRange options.
                 * @member {google.protobuf.IExtensionRangeOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 */
                ExtensionRange.prototype.options = null;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                 */
                ExtensionRange.create = function create(properties) {
                    return new ExtensionRange(properties);
                };

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                        $root.google.protobuf.ExtensionRangeOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        case 3:
                            message.options = $root.google.protobuf.ExtensionRangeOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ExtensionRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        let error = $root.google.protobuf.ExtensionRangeOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                 */
                ExtensionRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                        return object;
                    let message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.ExtensionRange.options: object expected");
                        message.options = $root.google.protobuf.ExtensionRangeOptions.fromObject(object.options);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                        object.options = null;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ExtensionRangeOptions.toObject(message.options, options);
                    return object;
                };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ExtensionRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ExtensionRange;
            })();

            DescriptorProto.ReservedRange = (function() {

                /**
                 * Properties of a ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @interface IReservedRange
                 * @property {number|null} [start] ReservedRange start
                 * @property {number|null} [end] ReservedRange end
                 */

                /**
                 * Constructs a new ReservedRange.
                 * @memberof google.protobuf.DescriptorProto
                 * @classdesc Represents a ReservedRange.
                 * @implements IReservedRange
                 * @constructor
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 */
                function ReservedRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.start = 0;

                /**
                 * ReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 */
                ReservedRange.prototype.end = 0;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                 */
                ReservedRange.create = function create(properties) {
                    return new ReservedRange(properties);
                };

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                 */
                ReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                        return object;
                    let message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @static
                 * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this ReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto.ReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ReservedRange;
            })();

            return DescriptorProto;
        })();

        protobuf.ExtensionRangeOptions = (function() {

            /**
             * Properties of an ExtensionRangeOptions.
             * @memberof google.protobuf
             * @interface IExtensionRangeOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ExtensionRangeOptions uninterpretedOption
             */

            /**
             * Constructs a new ExtensionRangeOptions.
             * @memberof google.protobuf
             * @classdesc Represents an ExtensionRangeOptions.
             * @implements IExtensionRangeOptions
             * @constructor
             * @param {google.protobuf.IExtensionRangeOptions=} [properties] Properties to set
             */
            function ExtensionRangeOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExtensionRangeOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.ExtensionRangeOptions
             * @instance
             */
            ExtensionRangeOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {google.protobuf.IExtensionRangeOptions=} [properties] Properties to set
             * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions instance
             */
            ExtensionRangeOptions.create = function create(properties) {
                return new ExtensionRangeOptions(properties);
            };

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {google.protobuf.IExtensionRangeOptions} message ExtensionRangeOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtensionRangeOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {google.protobuf.IExtensionRangeOptions} message ExtensionRangeOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtensionRangeOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtensionRangeOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ExtensionRangeOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtensionRangeOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExtensionRangeOptions message.
             * @function verify
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExtensionRangeOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
             */
            ExtensionRangeOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ExtensionRangeOptions)
                    return object;
                let message = new $root.google.protobuf.ExtensionRangeOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.ExtensionRangeOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.ExtensionRangeOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ExtensionRangeOptions
             * @static
             * @param {google.protobuf.ExtensionRangeOptions} message ExtensionRangeOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExtensionRangeOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ExtensionRangeOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExtensionRangeOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ExtensionRangeOptions;
        })();

        protobuf.FieldDescriptorProto = (function() {

            /**
             * Properties of a FieldDescriptorProto.
             * @memberof google.protobuf
             * @interface IFieldDescriptorProto
             * @property {string|null} [name] FieldDescriptorProto name
             * @property {number|null} [number] FieldDescriptorProto number
             * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
             * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
             * @property {string|null} [typeName] FieldDescriptorProto typeName
             * @property {string|null} [extendee] FieldDescriptorProto extendee
             * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
             * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
             * @property {string|null} [jsonName] FieldDescriptorProto jsonName
             * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
             */

            /**
             * Constructs a new FieldDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a FieldDescriptorProto.
             * @implements IFieldDescriptorProto
             * @constructor
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             */
            function FieldDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.name = "";

            /**
             * FieldDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.number = 0;

            /**
             * FieldDescriptorProto label.
             * @member {google.protobuf.FieldDescriptorProto.Label} label
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.label = 1;

            /**
             * FieldDescriptorProto type.
             * @member {google.protobuf.FieldDescriptorProto.Type} type
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.type = 1;

            /**
             * FieldDescriptorProto typeName.
             * @member {string} typeName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.typeName = "";

            /**
             * FieldDescriptorProto extendee.
             * @member {string} extendee
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.extendee = "";

            /**
             * FieldDescriptorProto defaultValue.
             * @member {string} defaultValue
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.defaultValue = "";

            /**
             * FieldDescriptorProto oneofIndex.
             * @member {number} oneofIndex
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.oneofIndex = 0;

            /**
             * FieldDescriptorProto jsonName.
             * @member {string} jsonName
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.jsonName = "";

            /**
             * FieldDescriptorProto options.
             * @member {google.protobuf.IFieldOptions|null|undefined} options
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             */
            FieldDescriptorProto.prototype.options = null;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
             */
            FieldDescriptorProto.create = function create(properties) {
                return new FieldDescriptorProto(properties);
            };

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                return writer;
            };

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.number = reader.int32();
                        break;
                    case 4:
                        message.label = reader.int32();
                        break;
                    case 5:
                        message.type = reader.int32();
                        break;
                    case 6:
                        message.typeName = reader.string();
                        break;
                    case 2:
                        message.extendee = reader.string();
                        break;
                    case 7:
                        message.defaultValue = reader.string();
                        break;
                    case 9:
                        message.oneofIndex = reader.int32();
                        break;
                    case 10:
                        message.jsonName = reader.string();
                        break;
                    case 8:
                        message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.label != null && message.hasOwnProperty("label"))
                    switch (message.label) {
                    default:
                        return "label: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    }
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    if (!$util.isString(message.typeName))
                        return "typeName: string expected";
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    if (!$util.isString(message.extendee))
                        return "extendee: string expected";
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    if (!$util.isString(message.defaultValue))
                        return "defaultValue: string expected";
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    if (!$util.isInteger(message.oneofIndex))
                        return "oneofIndex: integer expected";
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    if (!$util.isString(message.jsonName))
                        return "jsonName: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.FieldOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
             */
            FieldDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.FieldDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                switch (object.label) {
                case "LABEL_OPTIONAL":
                case 1:
                    message.label = 1;
                    break;
                case "LABEL_REQUIRED":
                case 2:
                    message.label = 2;
                    break;
                case "LABEL_REPEATED":
                case 3:
                    message.label = 3;
                    break;
                }
                switch (object.type) {
                case "TYPE_DOUBLE":
                case 1:
                    message.type = 1;
                    break;
                case "TYPE_FLOAT":
                case 2:
                    message.type = 2;
                    break;
                case "TYPE_INT64":
                case 3:
                    message.type = 3;
                    break;
                case "TYPE_UINT64":
                case 4:
                    message.type = 4;
                    break;
                case "TYPE_INT32":
                case 5:
                    message.type = 5;
                    break;
                case "TYPE_FIXED64":
                case 6:
                    message.type = 6;
                    break;
                case "TYPE_FIXED32":
                case 7:
                    message.type = 7;
                    break;
                case "TYPE_BOOL":
                case 8:
                    message.type = 8;
                    break;
                case "TYPE_STRING":
                case 9:
                    message.type = 9;
                    break;
                case "TYPE_GROUP":
                case 10:
                    message.type = 10;
                    break;
                case "TYPE_MESSAGE":
                case 11:
                    message.type = 11;
                    break;
                case "TYPE_BYTES":
                case 12:
                    message.type = 12;
                    break;
                case "TYPE_UINT32":
                case 13:
                    message.type = 13;
                    break;
                case "TYPE_ENUM":
                case 14:
                    message.type = 14;
                    break;
                case "TYPE_SFIXED32":
                case 15:
                    message.type = 15;
                    break;
                case "TYPE_SFIXED64":
                case 16:
                    message.type = 16;
                    break;
                case "TYPE_SINT32":
                case 17:
                    message.type = 17;
                    break;
                case "TYPE_SINT64":
                case 18:
                    message.type = 18;
                    break;
                }
                if (object.typeName != null)
                    message.typeName = String(object.typeName);
                if (object.extendee != null)
                    message.extendee = String(object.extendee);
                if (object.defaultValue != null)
                    message.defaultValue = String(object.defaultValue);
                if (object.oneofIndex != null)
                    message.oneofIndex = object.oneofIndex | 0;
                if (object.jsonName != null)
                    message.jsonName = String(object.jsonName);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldDescriptorProto
             * @static
             * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.extendee = "";
                    object.number = 0;
                    object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                    object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                    object.typeName = "";
                    object.defaultValue = "";
                    object.options = null;
                    object.oneofIndex = 0;
                    object.jsonName = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.extendee != null && message.hasOwnProperty("extendee"))
                    object.extendee = message.extendee;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                if (message.typeName != null && message.hasOwnProperty("typeName"))
                    object.typeName = message.typeName;
                if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                    object.defaultValue = message.defaultValue;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                    object.oneofIndex = message.oneofIndex;
                if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                    object.jsonName = message.jsonName;
                return object;
            };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Type enum.
             * @name google.protobuf.FieldDescriptorProto.Type
             * @enum {number}
             * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
             * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
             * @property {number} TYPE_INT64=3 TYPE_INT64 value
             * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
             * @property {number} TYPE_INT32=5 TYPE_INT32 value
             * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
             * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
             * @property {number} TYPE_BOOL=8 TYPE_BOOL value
             * @property {number} TYPE_STRING=9 TYPE_STRING value
             * @property {number} TYPE_GROUP=10 TYPE_GROUP value
             * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
             * @property {number} TYPE_BYTES=12 TYPE_BYTES value
             * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
             * @property {number} TYPE_ENUM=14 TYPE_ENUM value
             * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
             * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
             * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
             * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
             */
            FieldDescriptorProto.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                values[valuesById[2] = "TYPE_FLOAT"] = 2;
                values[valuesById[3] = "TYPE_INT64"] = 3;
                values[valuesById[4] = "TYPE_UINT64"] = 4;
                values[valuesById[5] = "TYPE_INT32"] = 5;
                values[valuesById[6] = "TYPE_FIXED64"] = 6;
                values[valuesById[7] = "TYPE_FIXED32"] = 7;
                values[valuesById[8] = "TYPE_BOOL"] = 8;
                values[valuesById[9] = "TYPE_STRING"] = 9;
                values[valuesById[10] = "TYPE_GROUP"] = 10;
                values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                values[valuesById[12] = "TYPE_BYTES"] = 12;
                values[valuesById[13] = "TYPE_UINT32"] = 13;
                values[valuesById[14] = "TYPE_ENUM"] = 14;
                values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                values[valuesById[17] = "TYPE_SINT32"] = 17;
                values[valuesById[18] = "TYPE_SINT64"] = 18;
                return values;
            })();

            /**
             * Label enum.
             * @name google.protobuf.FieldDescriptorProto.Label
             * @enum {number}
             * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
             * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
             * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
             */
            FieldDescriptorProto.Label = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                values[valuesById[3] = "LABEL_REPEATED"] = 3;
                return values;
            })();

            return FieldDescriptorProto;
        })();

        protobuf.OneofDescriptorProto = (function() {

            /**
             * Properties of an OneofDescriptorProto.
             * @memberof google.protobuf
             * @interface IOneofDescriptorProto
             * @property {string|null} [name] OneofDescriptorProto name
             * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
             */

            /**
             * Constructs a new OneofDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an OneofDescriptorProto.
             * @implements IOneofDescriptorProto
             * @constructor
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             */
            function OneofDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.name = "";

            /**
             * OneofDescriptorProto options.
             * @member {google.protobuf.IOneofOptions|null|undefined} options
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             */
            OneofDescriptorProto.prototype.options = null;

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
             */
            OneofDescriptorProto.create = function create(properties) {
                return new OneofDescriptorProto(properties);
            };

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.OneofOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
             */
            OneofDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.OneofDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofDescriptorProto
             * @static
             * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofDescriptorProto;
        })();

        protobuf.EnumDescriptorProto = (function() {

            /**
             * Properties of an EnumDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumDescriptorProto
             * @property {string|null} [name] EnumDescriptorProto name
             * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
             * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
             * @property {Array.<google.protobuf.EnumDescriptorProto.IEnumReservedRange>|null} [reservedRange] EnumDescriptorProto reservedRange
             * @property {Array.<string>|null} [reservedName] EnumDescriptorProto reservedName
             */

            /**
             * Constructs a new EnumDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumDescriptorProto.
             * @implements IEnumDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             */
            function EnumDescriptorProto(properties) {
                this.value = [];
                this.reservedRange = [];
                this.reservedName = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.name = "";

            /**
             * EnumDescriptorProto value.
             * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.value = $util.emptyArray;

            /**
             * EnumDescriptorProto options.
             * @member {google.protobuf.IEnumOptions|null|undefined} options
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.options = null;

            /**
             * EnumDescriptorProto reservedRange.
             * @member {Array.<google.protobuf.EnumDescriptorProto.IEnumReservedRange>} reservedRange
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.reservedRange = $util.emptyArray;

            /**
             * EnumDescriptorProto reservedName.
             * @member {Array.<string>} reservedName
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             */
            EnumDescriptorProto.prototype.reservedName = $util.emptyArray;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
             */
            EnumDescriptorProto.create = function create(properties) {
                return new EnumDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.value != null && message.value.length)
                    for (let i = 0; i < message.value.length; ++i)
                        $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.reservedRange != null && message.reservedRange.length)
                    for (let i = 0; i < message.reservedRange.length; ++i)
                        $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.reservedName != null && message.reservedName.length)
                    for (let i = 0; i < message.reservedName.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.reservedName[i]);
                return writer;
            };

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                        break;
                    case 4:
                        if (!(message.reservedRange && message.reservedRange.length))
                            message.reservedRange = [];
                        message.reservedRange.push($root.google.protobuf.EnumDescriptorProto.EnumReservedRange.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.reservedName && message.reservedName.length))
                            message.reservedName = [];
                        message.reservedName.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (let i = 0; i < message.value.length; ++i) {
                        let error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                        if (error)
                            return "value." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.EnumOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                    if (!Array.isArray(message.reservedRange))
                        return "reservedRange: array expected";
                    for (let i = 0; i < message.reservedRange.length; ++i) {
                        let error = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.verify(message.reservedRange[i]);
                        if (error)
                            return "reservedRange." + error;
                    }
                }
                if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                    if (!Array.isArray(message.reservedName))
                        return "reservedName: array expected";
                    for (let i = 0; i < message.reservedName.length; ++i)
                        if (!$util.isString(message.reservedName[i]))
                            return "reservedName: string[] expected";
                }
                return null;
            };

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
             */
            EnumDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.EnumDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                    message.value = [];
                    for (let i = 0; i < object.value.length; ++i) {
                        if (typeof object.value[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                        message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                }
                if (object.reservedRange) {
                    if (!Array.isArray(object.reservedRange))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.reservedRange: array expected");
                    message.reservedRange = [];
                    for (let i = 0; i < object.reservedRange.length; ++i) {
                        if (typeof object.reservedRange[i] !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.reservedRange: object expected");
                        message.reservedRange[i] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.fromObject(object.reservedRange[i]);
                    }
                }
                if (object.reservedName) {
                    if (!Array.isArray(object.reservedName))
                        throw TypeError(".google.protobuf.EnumDescriptorProto.reservedName: array expected");
                    message.reservedName = [];
                    for (let i = 0; i < object.reservedName.length; ++i)
                        message.reservedName[i] = String(object.reservedName[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumDescriptorProto
             * @static
             * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.value = [];
                    object.reservedRange = [];
                    object.reservedName = [];
                }
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (let j = 0; j < message.value.length; ++j)
                        object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                if (message.reservedRange && message.reservedRange.length) {
                    object.reservedRange = [];
                    for (let j = 0; j < message.reservedRange.length; ++j)
                        object.reservedRange[j] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject(message.reservedRange[j], options);
                }
                if (message.reservedName && message.reservedName.length) {
                    object.reservedName = [];
                    for (let j = 0; j < message.reservedName.length; ++j)
                        object.reservedName[j] = message.reservedName[j];
                }
                return object;
            };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            EnumDescriptorProto.EnumReservedRange = (function() {

                /**
                 * Properties of an EnumReservedRange.
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @interface IEnumReservedRange
                 * @property {number|null} [start] EnumReservedRange start
                 * @property {number|null} [end] EnumReservedRange end
                 */

                /**
                 * Constructs a new EnumReservedRange.
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @classdesc Represents an EnumReservedRange.
                 * @implements IEnumReservedRange
                 * @constructor
                 * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange=} [properties] Properties to set
                 */
                function EnumReservedRange(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EnumReservedRange start.
                 * @member {number} start
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @instance
                 */
                EnumReservedRange.prototype.start = 0;

                /**
                 * EnumReservedRange end.
                 * @member {number} end
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @instance
                 */
                EnumReservedRange.prototype.end = 0;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange instance
                 */
                EnumReservedRange.create = function create(properties) {
                    return new EnumReservedRange(properties);
                };

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange} message EnumReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumReservedRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange} message EnumReservedRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumReservedRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.start = reader.int32();
                            break;
                        case 2:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumReservedRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EnumReservedRange message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumReservedRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.start != null && message.hasOwnProperty("start"))
                        if (!$util.isInteger(message.start))
                            return "start: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                 */
                EnumReservedRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto.EnumReservedRange)
                        return object;
                    let message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                    if (object.start != null)
                        message.start = object.start | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange} message EnumReservedRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumReservedRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.start = 0;
                        object.end = 0;
                    }
                    if (message.start != null && message.hasOwnProperty("start"))
                        object.start = message.start;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumReservedRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EnumReservedRange;
            })();

            return EnumDescriptorProto;
        })();

        protobuf.EnumValueDescriptorProto = (function() {

            /**
             * Properties of an EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @interface IEnumValueDescriptorProto
             * @property {string|null} [name] EnumValueDescriptorProto name
             * @property {number|null} [number] EnumValueDescriptorProto number
             * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
             */

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueDescriptorProto.
             * @implements IEnumValueDescriptorProto
             * @constructor
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             */
            function EnumValueDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.name = "";

            /**
             * EnumValueDescriptorProto number.
             * @member {number} number
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.number = 0;

            /**
             * EnumValueDescriptorProto options.
             * @member {google.protobuf.IEnumValueOptions|null|undefined} options
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             */
            EnumValueDescriptorProto.prototype.options = null;

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
             */
            EnumValueDescriptorProto.create = function create(properties) {
                return new EnumValueDescriptorProto(properties);
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.number = reader.int32();
                        break;
                    case 3:
                        message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number))
                        return "number: integer expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
             */
            EnumValueDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.EnumValueDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.number != null)
                    message.number = object.number | 0;
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @static
             * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.number = 0;
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueDescriptorProto;
        })();

        protobuf.ServiceDescriptorProto = (function() {

            /**
             * Properties of a ServiceDescriptorProto.
             * @memberof google.protobuf
             * @interface IServiceDescriptorProto
             * @property {string|null} [name] ServiceDescriptorProto name
             * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
             * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
             */

            /**
             * Constructs a new ServiceDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceDescriptorProto.
             * @implements IServiceDescriptorProto
             * @constructor
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             */
            function ServiceDescriptorProto(properties) {
                this.method = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.name = "";

            /**
             * ServiceDescriptorProto method.
             * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.method = $util.emptyArray;

            /**
             * ServiceDescriptorProto options.
             * @member {google.protobuf.IServiceOptions|null|undefined} options
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             */
            ServiceDescriptorProto.prototype.options = null;

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
             */
            ServiceDescriptorProto.create = function create(properties) {
                return new ServiceDescriptorProto(properties);
            };

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.method != null && message.method.length)
                    for (let i = 0; i < message.method.length; ++i)
                        $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.method && message.method.length))
                            message.method = [];
                        message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.method != null && message.hasOwnProperty("method")) {
                    if (!Array.isArray(message.method))
                        return "method: array expected";
                    for (let i = 0; i < message.method.length; ++i) {
                        let error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                        if (error)
                            return "method." + error;
                    }
                }
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.ServiceOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                return null;
            };

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
             */
            ServiceDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.ServiceDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.method) {
                    if (!Array.isArray(object.method))
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                    message.method = [];
                    for (let i = 0; i < object.method.length; ++i) {
                        if (typeof object.method[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                        message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                    }
                }
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceDescriptorProto
             * @static
             * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.method = [];
                if (options.defaults) {
                    object.name = "";
                    object.options = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.method && message.method.length) {
                    object.method = [];
                    for (let j = 0; j < message.method.length; ++j)
                        object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                }
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                return object;
            };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceDescriptorProto;
        })();

        protobuf.MethodDescriptorProto = (function() {

            /**
             * Properties of a MethodDescriptorProto.
             * @memberof google.protobuf
             * @interface IMethodDescriptorProto
             * @property {string|null} [name] MethodDescriptorProto name
             * @property {string|null} [inputType] MethodDescriptorProto inputType
             * @property {string|null} [outputType] MethodDescriptorProto outputType
             * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
             * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
             * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
             */

            /**
             * Constructs a new MethodDescriptorProto.
             * @memberof google.protobuf
             * @classdesc Represents a MethodDescriptorProto.
             * @implements IMethodDescriptorProto
             * @constructor
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             */
            function MethodDescriptorProto(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodDescriptorProto name.
             * @member {string} name
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.name = "";

            /**
             * MethodDescriptorProto inputType.
             * @member {string} inputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.inputType = "";

            /**
             * MethodDescriptorProto outputType.
             * @member {string} outputType
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.outputType = "";

            /**
             * MethodDescriptorProto options.
             * @member {google.protobuf.IMethodOptions|null|undefined} options
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.options = null;

            /**
             * MethodDescriptorProto clientStreaming.
             * @member {boolean} clientStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.clientStreaming = false;

            /**
             * MethodDescriptorProto serverStreaming.
             * @member {boolean} serverStreaming
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             */
            MethodDescriptorProto.prototype.serverStreaming = false;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
             */
            MethodDescriptorProto.create = function create(properties) {
                return new MethodDescriptorProto(properties);
            };

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                    $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                return writer;
            };

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.inputType = reader.string();
                        break;
                    case 3:
                        message.outputType = reader.string();
                        break;
                    case 4:
                        message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.clientStreaming = reader.bool();
                        break;
                    case 6:
                        message.serverStreaming = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodDescriptorProto message.
             * @function verify
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodDescriptorProto.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    if (!$util.isString(message.inputType))
                        return "inputType: string expected";
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    if (!$util.isString(message.outputType))
                        return "outputType: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    let error = $root.google.protobuf.MethodOptions.verify(message.options);
                    if (error)
                        return "options." + error;
                }
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    if (typeof message.clientStreaming !== "boolean")
                        return "clientStreaming: boolean expected";
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    if (typeof message.serverStreaming !== "boolean")
                        return "serverStreaming: boolean expected";
                return null;
            };

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
             */
            MethodDescriptorProto.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                    return object;
                let message = new $root.google.protobuf.MethodDescriptorProto();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.inputType != null)
                    message.inputType = String(object.inputType);
                if (object.outputType != null)
                    message.outputType = String(object.outputType);
                if (object.options != null) {
                    if (typeof object.options !== "object")
                        throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                    message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                }
                if (object.clientStreaming != null)
                    message.clientStreaming = Boolean(object.clientStreaming);
                if (object.serverStreaming != null)
                    message.serverStreaming = Boolean(object.serverStreaming);
                return message;
            };

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodDescriptorProto
             * @static
             * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodDescriptorProto.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.name = "";
                    object.inputType = "";
                    object.outputType = "";
                    object.options = null;
                    object.clientStreaming = false;
                    object.serverStreaming = false;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.inputType != null && message.hasOwnProperty("inputType"))
                    object.inputType = message.inputType;
                if (message.outputType != null && message.hasOwnProperty("outputType"))
                    object.outputType = message.outputType;
                if (message.options != null && message.hasOwnProperty("options"))
                    object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                    object.clientStreaming = message.clientStreaming;
                if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                    object.serverStreaming = message.serverStreaming;
                return object;
            };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodDescriptorProto
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodDescriptorProto.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MethodDescriptorProto;
        })();

        protobuf.FileOptions = (function() {

            /**
             * Properties of a FileOptions.
             * @memberof google.protobuf
             * @interface IFileOptions
             * @property {string|null} [javaPackage] FileOptions javaPackage
             * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
             * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
             * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
             * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
             * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
             * @property {string|null} [goPackage] FileOptions goPackage
             * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
             * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
             * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
             * @property {boolean|null} [phpGenericServices] FileOptions phpGenericServices
             * @property {boolean|null} [deprecated] FileOptions deprecated
             * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
             * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
             * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
             * @property {string|null} [swiftPrefix] FileOptions swiftPrefix
             * @property {string|null} [phpClassPrefix] FileOptions phpClassPrefix
             * @property {string|null} [phpNamespace] FileOptions phpNamespace
             * @property {string|null} [phpMetadataNamespace] FileOptions phpMetadataNamespace
             * @property {string|null} [rubyPackage] FileOptions rubyPackage
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
             * @property {boolean|null} [".gogoproto.goprotoGettersAll"] FileOptions .gogoproto.goprotoGettersAll
             * @property {boolean|null} [".gogoproto.goprotoEnumPrefixAll"] FileOptions .gogoproto.goprotoEnumPrefixAll
             * @property {boolean|null} [".gogoproto.goprotoStringerAll"] FileOptions .gogoproto.goprotoStringerAll
             * @property {boolean|null} [".gogoproto.verboseEqualAll"] FileOptions .gogoproto.verboseEqualAll
             * @property {boolean|null} [".gogoproto.faceAll"] FileOptions .gogoproto.faceAll
             * @property {boolean|null} [".gogoproto.gostringAll"] FileOptions .gogoproto.gostringAll
             * @property {boolean|null} [".gogoproto.populateAll"] FileOptions .gogoproto.populateAll
             * @property {boolean|null} [".gogoproto.stringerAll"] FileOptions .gogoproto.stringerAll
             * @property {boolean|null} [".gogoproto.onlyoneAll"] FileOptions .gogoproto.onlyoneAll
             * @property {boolean|null} [".gogoproto.equalAll"] FileOptions .gogoproto.equalAll
             * @property {boolean|null} [".gogoproto.descriptionAll"] FileOptions .gogoproto.descriptionAll
             * @property {boolean|null} [".gogoproto.testgenAll"] FileOptions .gogoproto.testgenAll
             * @property {boolean|null} [".gogoproto.benchgenAll"] FileOptions .gogoproto.benchgenAll
             * @property {boolean|null} [".gogoproto.marshalerAll"] FileOptions .gogoproto.marshalerAll
             * @property {boolean|null} [".gogoproto.unmarshalerAll"] FileOptions .gogoproto.unmarshalerAll
             * @property {boolean|null} [".gogoproto.stableMarshalerAll"] FileOptions .gogoproto.stableMarshalerAll
             * @property {boolean|null} [".gogoproto.sizerAll"] FileOptions .gogoproto.sizerAll
             * @property {boolean|null} [".gogoproto.goprotoEnumStringerAll"] FileOptions .gogoproto.goprotoEnumStringerAll
             * @property {boolean|null} [".gogoproto.enumStringerAll"] FileOptions .gogoproto.enumStringerAll
             * @property {boolean|null} [".gogoproto.unsafeMarshalerAll"] FileOptions .gogoproto.unsafeMarshalerAll
             * @property {boolean|null} [".gogoproto.unsafeUnmarshalerAll"] FileOptions .gogoproto.unsafeUnmarshalerAll
             * @property {boolean|null} [".gogoproto.goprotoExtensionsMapAll"] FileOptions .gogoproto.goprotoExtensionsMapAll
             * @property {boolean|null} [".gogoproto.goprotoUnrecognizedAll"] FileOptions .gogoproto.goprotoUnrecognizedAll
             * @property {boolean|null} [".gogoproto.gogoprotoImport"] FileOptions .gogoproto.gogoprotoImport
             * @property {boolean|null} [".gogoproto.protosizerAll"] FileOptions .gogoproto.protosizerAll
             * @property {boolean|null} [".gogoproto.compareAll"] FileOptions .gogoproto.compareAll
             * @property {boolean|null} [".gogoproto.typedeclAll"] FileOptions .gogoproto.typedeclAll
             * @property {boolean|null} [".gogoproto.enumdeclAll"] FileOptions .gogoproto.enumdeclAll
             * @property {boolean|null} [".gogoproto.goprotoRegistration"] FileOptions .gogoproto.goprotoRegistration
             * @property {boolean|null} [".gogoproto.messagenameAll"] FileOptions .gogoproto.messagenameAll
             * @property {boolean|null} [".gogoproto.goprotoSizecacheAll"] FileOptions .gogoproto.goprotoSizecacheAll
             * @property {boolean|null} [".gogoproto.goprotoUnkeyedAll"] FileOptions .gogoproto.goprotoUnkeyedAll
             */

            /**
             * Constructs a new FileOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FileOptions.
             * @implements IFileOptions
             * @constructor
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             */
            function FileOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileOptions javaPackage.
             * @member {string} javaPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaPackage = "";

            /**
             * FileOptions javaOuterClassname.
             * @member {string} javaOuterClassname
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaOuterClassname = "";

            /**
             * FileOptions javaMultipleFiles.
             * @member {boolean} javaMultipleFiles
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaMultipleFiles = false;

            /**
             * FileOptions javaGenerateEqualsAndHash.
             * @member {boolean} javaGenerateEqualsAndHash
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenerateEqualsAndHash = false;

            /**
             * FileOptions javaStringCheckUtf8.
             * @member {boolean} javaStringCheckUtf8
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaStringCheckUtf8 = false;

            /**
             * FileOptions optimizeFor.
             * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.optimizeFor = 1;

            /**
             * FileOptions goPackage.
             * @member {string} goPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.goPackage = "";

            /**
             * FileOptions ccGenericServices.
             * @member {boolean} ccGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccGenericServices = false;

            /**
             * FileOptions javaGenericServices.
             * @member {boolean} javaGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.javaGenericServices = false;

            /**
             * FileOptions pyGenericServices.
             * @member {boolean} pyGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.pyGenericServices = false;

            /**
             * FileOptions phpGenericServices.
             * @member {boolean} phpGenericServices
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.phpGenericServices = false;

            /**
             * FileOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.deprecated = false;

            /**
             * FileOptions ccEnableArenas.
             * @member {boolean} ccEnableArenas
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.ccEnableArenas = false;

            /**
             * FileOptions objcClassPrefix.
             * @member {string} objcClassPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.objcClassPrefix = "";

            /**
             * FileOptions csharpNamespace.
             * @member {string} csharpNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.csharpNamespace = "";

            /**
             * FileOptions swiftPrefix.
             * @member {string} swiftPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.swiftPrefix = "";

            /**
             * FileOptions phpClassPrefix.
             * @member {string} phpClassPrefix
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.phpClassPrefix = "";

            /**
             * FileOptions phpNamespace.
             * @member {string} phpNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.phpNamespace = "";

            /**
             * FileOptions phpMetadataNamespace.
             * @member {string} phpMetadataNamespace
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.phpMetadataNamespace = "";

            /**
             * FileOptions rubyPackage.
             * @member {string} rubyPackage
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.rubyPackage = "";

            /**
             * FileOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * FileOptions .gogoproto.goprotoGettersAll.
             * @member {boolean} .gogoproto.goprotoGettersAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.goprotoGettersAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoEnumPrefixAll.
             * @member {boolean} .gogoproto.goprotoEnumPrefixAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.goprotoEnumPrefixAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoStringerAll.
             * @member {boolean} .gogoproto.goprotoStringerAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.goprotoStringerAll"] = false;

            /**
             * FileOptions .gogoproto.verboseEqualAll.
             * @member {boolean} .gogoproto.verboseEqualAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.verboseEqualAll"] = false;

            /**
             * FileOptions .gogoproto.faceAll.
             * @member {boolean} .gogoproto.faceAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.faceAll"] = false;

            /**
             * FileOptions .gogoproto.gostringAll.
             * @member {boolean} .gogoproto.gostringAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.gostringAll"] = false;

            /**
             * FileOptions .gogoproto.populateAll.
             * @member {boolean} .gogoproto.populateAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.populateAll"] = false;

            /**
             * FileOptions .gogoproto.stringerAll.
             * @member {boolean} .gogoproto.stringerAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.stringerAll"] = false;

            /**
             * FileOptions .gogoproto.onlyoneAll.
             * @member {boolean} .gogoproto.onlyoneAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.onlyoneAll"] = false;

            /**
             * FileOptions .gogoproto.equalAll.
             * @member {boolean} .gogoproto.equalAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.equalAll"] = false;

            /**
             * FileOptions .gogoproto.descriptionAll.
             * @member {boolean} .gogoproto.descriptionAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.descriptionAll"] = false;

            /**
             * FileOptions .gogoproto.testgenAll.
             * @member {boolean} .gogoproto.testgenAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.testgenAll"] = false;

            /**
             * FileOptions .gogoproto.benchgenAll.
             * @member {boolean} .gogoproto.benchgenAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.benchgenAll"] = false;

            /**
             * FileOptions .gogoproto.marshalerAll.
             * @member {boolean} .gogoproto.marshalerAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.marshalerAll"] = false;

            /**
             * FileOptions .gogoproto.unmarshalerAll.
             * @member {boolean} .gogoproto.unmarshalerAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.unmarshalerAll"] = false;

            /**
             * FileOptions .gogoproto.stableMarshalerAll.
             * @member {boolean} .gogoproto.stableMarshalerAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.stableMarshalerAll"] = false;

            /**
             * FileOptions .gogoproto.sizerAll.
             * @member {boolean} .gogoproto.sizerAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.sizerAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoEnumStringerAll.
             * @member {boolean} .gogoproto.goprotoEnumStringerAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.goprotoEnumStringerAll"] = false;

            /**
             * FileOptions .gogoproto.enumStringerAll.
             * @member {boolean} .gogoproto.enumStringerAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.enumStringerAll"] = false;

            /**
             * FileOptions .gogoproto.unsafeMarshalerAll.
             * @member {boolean} .gogoproto.unsafeMarshalerAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.unsafeMarshalerAll"] = false;

            /**
             * FileOptions .gogoproto.unsafeUnmarshalerAll.
             * @member {boolean} .gogoproto.unsafeUnmarshalerAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.unsafeUnmarshalerAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoExtensionsMapAll.
             * @member {boolean} .gogoproto.goprotoExtensionsMapAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.goprotoExtensionsMapAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoUnrecognizedAll.
             * @member {boolean} .gogoproto.goprotoUnrecognizedAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.goprotoUnrecognizedAll"] = false;

            /**
             * FileOptions .gogoproto.gogoprotoImport.
             * @member {boolean} .gogoproto.gogoprotoImport
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.gogoprotoImport"] = false;

            /**
             * FileOptions .gogoproto.protosizerAll.
             * @member {boolean} .gogoproto.protosizerAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.protosizerAll"] = false;

            /**
             * FileOptions .gogoproto.compareAll.
             * @member {boolean} .gogoproto.compareAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.compareAll"] = false;

            /**
             * FileOptions .gogoproto.typedeclAll.
             * @member {boolean} .gogoproto.typedeclAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.typedeclAll"] = false;

            /**
             * FileOptions .gogoproto.enumdeclAll.
             * @member {boolean} .gogoproto.enumdeclAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.enumdeclAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoRegistration.
             * @member {boolean} .gogoproto.goprotoRegistration
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.goprotoRegistration"] = false;

            /**
             * FileOptions .gogoproto.messagenameAll.
             * @member {boolean} .gogoproto.messagenameAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.messagenameAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoSizecacheAll.
             * @member {boolean} .gogoproto.goprotoSizecacheAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.goprotoSizecacheAll"] = false;

            /**
             * FileOptions .gogoproto.goprotoUnkeyedAll.
             * @member {boolean} .gogoproto.goprotoUnkeyedAll
             * @memberof google.protobuf.FileOptions
             * @instance
             */
            FileOptions.prototype[".gogoproto.goprotoUnkeyedAll"] = false;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions=} [properties] Properties to set
             * @returns {google.protobuf.FileOptions} FileOptions instance
             */
            FileOptions.create = function create(properties) {
                return new FileOptions(properties);
            };

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
                    writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
                    writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
                    writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
                    writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
                    writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                if (message.swiftPrefix != null && Object.hasOwnProperty.call(message, "swiftPrefix"))
                    writer.uint32(/* id 39, wireType 2 =*/314).string(message.swiftPrefix);
                if (message.phpClassPrefix != null && Object.hasOwnProperty.call(message, "phpClassPrefix"))
                    writer.uint32(/* id 40, wireType 2 =*/322).string(message.phpClassPrefix);
                if (message.phpNamespace != null && Object.hasOwnProperty.call(message, "phpNamespace"))
                    writer.uint32(/* id 41, wireType 2 =*/330).string(message.phpNamespace);
                if (message.phpGenericServices != null && Object.hasOwnProperty.call(message, "phpGenericServices"))
                    writer.uint32(/* id 42, wireType 0 =*/336).bool(message.phpGenericServices);
                if (message.phpMetadataNamespace != null && Object.hasOwnProperty.call(message, "phpMetadataNamespace"))
                    writer.uint32(/* id 44, wireType 2 =*/354).string(message.phpMetadataNamespace);
                if (message.rubyPackage != null && Object.hasOwnProperty.call(message, "rubyPackage"))
                    writer.uint32(/* id 45, wireType 2 =*/362).string(message.rubyPackage);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gogoproto.goprotoGettersAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoGettersAll"))
                    writer.uint32(/* id 63001, wireType 0 =*/504008).bool(message[".gogoproto.goprotoGettersAll"]);
                if (message[".gogoproto.goprotoEnumPrefixAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoEnumPrefixAll"))
                    writer.uint32(/* id 63002, wireType 0 =*/504016).bool(message[".gogoproto.goprotoEnumPrefixAll"]);
                if (message[".gogoproto.goprotoStringerAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoStringerAll"))
                    writer.uint32(/* id 63003, wireType 0 =*/504024).bool(message[".gogoproto.goprotoStringerAll"]);
                if (message[".gogoproto.verboseEqualAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.verboseEqualAll"))
                    writer.uint32(/* id 63004, wireType 0 =*/504032).bool(message[".gogoproto.verboseEqualAll"]);
                if (message[".gogoproto.faceAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.faceAll"))
                    writer.uint32(/* id 63005, wireType 0 =*/504040).bool(message[".gogoproto.faceAll"]);
                if (message[".gogoproto.gostringAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.gostringAll"))
                    writer.uint32(/* id 63006, wireType 0 =*/504048).bool(message[".gogoproto.gostringAll"]);
                if (message[".gogoproto.populateAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.populateAll"))
                    writer.uint32(/* id 63007, wireType 0 =*/504056).bool(message[".gogoproto.populateAll"]);
                if (message[".gogoproto.stringerAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.stringerAll"))
                    writer.uint32(/* id 63008, wireType 0 =*/504064).bool(message[".gogoproto.stringerAll"]);
                if (message[".gogoproto.onlyoneAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.onlyoneAll"))
                    writer.uint32(/* id 63009, wireType 0 =*/504072).bool(message[".gogoproto.onlyoneAll"]);
                if (message[".gogoproto.equalAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.equalAll"))
                    writer.uint32(/* id 63013, wireType 0 =*/504104).bool(message[".gogoproto.equalAll"]);
                if (message[".gogoproto.descriptionAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.descriptionAll"))
                    writer.uint32(/* id 63014, wireType 0 =*/504112).bool(message[".gogoproto.descriptionAll"]);
                if (message[".gogoproto.testgenAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.testgenAll"))
                    writer.uint32(/* id 63015, wireType 0 =*/504120).bool(message[".gogoproto.testgenAll"]);
                if (message[".gogoproto.benchgenAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.benchgenAll"))
                    writer.uint32(/* id 63016, wireType 0 =*/504128).bool(message[".gogoproto.benchgenAll"]);
                if (message[".gogoproto.marshalerAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.marshalerAll"))
                    writer.uint32(/* id 63017, wireType 0 =*/504136).bool(message[".gogoproto.marshalerAll"]);
                if (message[".gogoproto.unmarshalerAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.unmarshalerAll"))
                    writer.uint32(/* id 63018, wireType 0 =*/504144).bool(message[".gogoproto.unmarshalerAll"]);
                if (message[".gogoproto.stableMarshalerAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.stableMarshalerAll"))
                    writer.uint32(/* id 63019, wireType 0 =*/504152).bool(message[".gogoproto.stableMarshalerAll"]);
                if (message[".gogoproto.sizerAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.sizerAll"))
                    writer.uint32(/* id 63020, wireType 0 =*/504160).bool(message[".gogoproto.sizerAll"]);
                if (message[".gogoproto.goprotoEnumStringerAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoEnumStringerAll"))
                    writer.uint32(/* id 63021, wireType 0 =*/504168).bool(message[".gogoproto.goprotoEnumStringerAll"]);
                if (message[".gogoproto.enumStringerAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.enumStringerAll"))
                    writer.uint32(/* id 63022, wireType 0 =*/504176).bool(message[".gogoproto.enumStringerAll"]);
                if (message[".gogoproto.unsafeMarshalerAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.unsafeMarshalerAll"))
                    writer.uint32(/* id 63023, wireType 0 =*/504184).bool(message[".gogoproto.unsafeMarshalerAll"]);
                if (message[".gogoproto.unsafeUnmarshalerAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.unsafeUnmarshalerAll"))
                    writer.uint32(/* id 63024, wireType 0 =*/504192).bool(message[".gogoproto.unsafeUnmarshalerAll"]);
                if (message[".gogoproto.goprotoExtensionsMapAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoExtensionsMapAll"))
                    writer.uint32(/* id 63025, wireType 0 =*/504200).bool(message[".gogoproto.goprotoExtensionsMapAll"]);
                if (message[".gogoproto.goprotoUnrecognizedAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoUnrecognizedAll"))
                    writer.uint32(/* id 63026, wireType 0 =*/504208).bool(message[".gogoproto.goprotoUnrecognizedAll"]);
                if (message[".gogoproto.gogoprotoImport"] != null && Object.hasOwnProperty.call(message, ".gogoproto.gogoprotoImport"))
                    writer.uint32(/* id 63027, wireType 0 =*/504216).bool(message[".gogoproto.gogoprotoImport"]);
                if (message[".gogoproto.protosizerAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.protosizerAll"))
                    writer.uint32(/* id 63028, wireType 0 =*/504224).bool(message[".gogoproto.protosizerAll"]);
                if (message[".gogoproto.compareAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.compareAll"))
                    writer.uint32(/* id 63029, wireType 0 =*/504232).bool(message[".gogoproto.compareAll"]);
                if (message[".gogoproto.typedeclAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.typedeclAll"))
                    writer.uint32(/* id 63030, wireType 0 =*/504240).bool(message[".gogoproto.typedeclAll"]);
                if (message[".gogoproto.enumdeclAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.enumdeclAll"))
                    writer.uint32(/* id 63031, wireType 0 =*/504248).bool(message[".gogoproto.enumdeclAll"]);
                if (message[".gogoproto.goprotoRegistration"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoRegistration"))
                    writer.uint32(/* id 63032, wireType 0 =*/504256).bool(message[".gogoproto.goprotoRegistration"]);
                if (message[".gogoproto.messagenameAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.messagenameAll"))
                    writer.uint32(/* id 63033, wireType 0 =*/504264).bool(message[".gogoproto.messagenameAll"]);
                if (message[".gogoproto.goprotoSizecacheAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoSizecacheAll"))
                    writer.uint32(/* id 63034, wireType 0 =*/504272).bool(message[".gogoproto.goprotoSizecacheAll"]);
                if (message[".gogoproto.goprotoUnkeyedAll"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoUnkeyedAll"))
                    writer.uint32(/* id 63035, wireType 0 =*/504280).bool(message[".gogoproto.goprotoUnkeyedAll"]);
                return writer;
            };

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.javaPackage = reader.string();
                        break;
                    case 8:
                        message.javaOuterClassname = reader.string();
                        break;
                    case 10:
                        message.javaMultipleFiles = reader.bool();
                        break;
                    case 20:
                        message.javaGenerateEqualsAndHash = reader.bool();
                        break;
                    case 27:
                        message.javaStringCheckUtf8 = reader.bool();
                        break;
                    case 9:
                        message.optimizeFor = reader.int32();
                        break;
                    case 11:
                        message.goPackage = reader.string();
                        break;
                    case 16:
                        message.ccGenericServices = reader.bool();
                        break;
                    case 17:
                        message.javaGenericServices = reader.bool();
                        break;
                    case 18:
                        message.pyGenericServices = reader.bool();
                        break;
                    case 42:
                        message.phpGenericServices = reader.bool();
                        break;
                    case 23:
                        message.deprecated = reader.bool();
                        break;
                    case 31:
                        message.ccEnableArenas = reader.bool();
                        break;
                    case 36:
                        message.objcClassPrefix = reader.string();
                        break;
                    case 37:
                        message.csharpNamespace = reader.string();
                        break;
                    case 39:
                        message.swiftPrefix = reader.string();
                        break;
                    case 40:
                        message.phpClassPrefix = reader.string();
                        break;
                    case 41:
                        message.phpNamespace = reader.string();
                        break;
                    case 44:
                        message.phpMetadataNamespace = reader.string();
                        break;
                    case 45:
                        message.rubyPackage = reader.string();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 63001:
                        message[".gogoproto.goprotoGettersAll"] = reader.bool();
                        break;
                    case 63002:
                        message[".gogoproto.goprotoEnumPrefixAll"] = reader.bool();
                        break;
                    case 63003:
                        message[".gogoproto.goprotoStringerAll"] = reader.bool();
                        break;
                    case 63004:
                        message[".gogoproto.verboseEqualAll"] = reader.bool();
                        break;
                    case 63005:
                        message[".gogoproto.faceAll"] = reader.bool();
                        break;
                    case 63006:
                        message[".gogoproto.gostringAll"] = reader.bool();
                        break;
                    case 63007:
                        message[".gogoproto.populateAll"] = reader.bool();
                        break;
                    case 63008:
                        message[".gogoproto.stringerAll"] = reader.bool();
                        break;
                    case 63009:
                        message[".gogoproto.onlyoneAll"] = reader.bool();
                        break;
                    case 63013:
                        message[".gogoproto.equalAll"] = reader.bool();
                        break;
                    case 63014:
                        message[".gogoproto.descriptionAll"] = reader.bool();
                        break;
                    case 63015:
                        message[".gogoproto.testgenAll"] = reader.bool();
                        break;
                    case 63016:
                        message[".gogoproto.benchgenAll"] = reader.bool();
                        break;
                    case 63017:
                        message[".gogoproto.marshalerAll"] = reader.bool();
                        break;
                    case 63018:
                        message[".gogoproto.unmarshalerAll"] = reader.bool();
                        break;
                    case 63019:
                        message[".gogoproto.stableMarshalerAll"] = reader.bool();
                        break;
                    case 63020:
                        message[".gogoproto.sizerAll"] = reader.bool();
                        break;
                    case 63021:
                        message[".gogoproto.goprotoEnumStringerAll"] = reader.bool();
                        break;
                    case 63022:
                        message[".gogoproto.enumStringerAll"] = reader.bool();
                        break;
                    case 63023:
                        message[".gogoproto.unsafeMarshalerAll"] = reader.bool();
                        break;
                    case 63024:
                        message[".gogoproto.unsafeUnmarshalerAll"] = reader.bool();
                        break;
                    case 63025:
                        message[".gogoproto.goprotoExtensionsMapAll"] = reader.bool();
                        break;
                    case 63026:
                        message[".gogoproto.goprotoUnrecognizedAll"] = reader.bool();
                        break;
                    case 63027:
                        message[".gogoproto.gogoprotoImport"] = reader.bool();
                        break;
                    case 63028:
                        message[".gogoproto.protosizerAll"] = reader.bool();
                        break;
                    case 63029:
                        message[".gogoproto.compareAll"] = reader.bool();
                        break;
                    case 63030:
                        message[".gogoproto.typedeclAll"] = reader.bool();
                        break;
                    case 63031:
                        message[".gogoproto.enumdeclAll"] = reader.bool();
                        break;
                    case 63032:
                        message[".gogoproto.goprotoRegistration"] = reader.bool();
                        break;
                    case 63033:
                        message[".gogoproto.messagenameAll"] = reader.bool();
                        break;
                    case 63034:
                        message[".gogoproto.goprotoSizecacheAll"] = reader.bool();
                        break;
                    case 63035:
                        message[".gogoproto.goprotoUnkeyedAll"] = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FileOptions} FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileOptions message.
             * @function verify
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    if (!$util.isString(message.javaPackage))
                        return "javaPackage: string expected";
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    if (!$util.isString(message.javaOuterClassname))
                        return "javaOuterClassname: string expected";
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    if (typeof message.javaMultipleFiles !== "boolean")
                        return "javaMultipleFiles: boolean expected";
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                        return "javaGenerateEqualsAndHash: boolean expected";
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    if (typeof message.javaStringCheckUtf8 !== "boolean")
                        return "javaStringCheckUtf8: boolean expected";
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    switch (message.optimizeFor) {
                    default:
                        return "optimizeFor: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    if (!$util.isString(message.goPackage))
                        return "goPackage: string expected";
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    if (typeof message.ccGenericServices !== "boolean")
                        return "ccGenericServices: boolean expected";
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    if (typeof message.javaGenericServices !== "boolean")
                        return "javaGenericServices: boolean expected";
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    if (typeof message.pyGenericServices !== "boolean")
                        return "pyGenericServices: boolean expected";
                if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                    if (typeof message.phpGenericServices !== "boolean")
                        return "phpGenericServices: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    if (typeof message.ccEnableArenas !== "boolean")
                        return "ccEnableArenas: boolean expected";
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    if (!$util.isString(message.objcClassPrefix))
                        return "objcClassPrefix: string expected";
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    if (!$util.isString(message.csharpNamespace))
                        return "csharpNamespace: string expected";
                if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                    if (!$util.isString(message.swiftPrefix))
                        return "swiftPrefix: string expected";
                if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                    if (!$util.isString(message.phpClassPrefix))
                        return "phpClassPrefix: string expected";
                if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                    if (!$util.isString(message.phpNamespace))
                        return "phpNamespace: string expected";
                if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                    if (!$util.isString(message.phpMetadataNamespace))
                        return "phpMetadataNamespace: string expected";
                if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                    if (!$util.isString(message.rubyPackage))
                        return "rubyPackage: string expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gogoproto.goprotoGettersAll"] != null && message.hasOwnProperty(".gogoproto.goprotoGettersAll"))
                    if (typeof message[".gogoproto.goprotoGettersAll"] !== "boolean")
                        return ".gogoproto.goprotoGettersAll: boolean expected";
                if (message[".gogoproto.goprotoEnumPrefixAll"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumPrefixAll"))
                    if (typeof message[".gogoproto.goprotoEnumPrefixAll"] !== "boolean")
                        return ".gogoproto.goprotoEnumPrefixAll: boolean expected";
                if (message[".gogoproto.goprotoStringerAll"] != null && message.hasOwnProperty(".gogoproto.goprotoStringerAll"))
                    if (typeof message[".gogoproto.goprotoStringerAll"] !== "boolean")
                        return ".gogoproto.goprotoStringerAll: boolean expected";
                if (message[".gogoproto.verboseEqualAll"] != null && message.hasOwnProperty(".gogoproto.verboseEqualAll"))
                    if (typeof message[".gogoproto.verboseEqualAll"] !== "boolean")
                        return ".gogoproto.verboseEqualAll: boolean expected";
                if (message[".gogoproto.faceAll"] != null && message.hasOwnProperty(".gogoproto.faceAll"))
                    if (typeof message[".gogoproto.faceAll"] !== "boolean")
                        return ".gogoproto.faceAll: boolean expected";
                if (message[".gogoproto.gostringAll"] != null && message.hasOwnProperty(".gogoproto.gostringAll"))
                    if (typeof message[".gogoproto.gostringAll"] !== "boolean")
                        return ".gogoproto.gostringAll: boolean expected";
                if (message[".gogoproto.populateAll"] != null && message.hasOwnProperty(".gogoproto.populateAll"))
                    if (typeof message[".gogoproto.populateAll"] !== "boolean")
                        return ".gogoproto.populateAll: boolean expected";
                if (message[".gogoproto.stringerAll"] != null && message.hasOwnProperty(".gogoproto.stringerAll"))
                    if (typeof message[".gogoproto.stringerAll"] !== "boolean")
                        return ".gogoproto.stringerAll: boolean expected";
                if (message[".gogoproto.onlyoneAll"] != null && message.hasOwnProperty(".gogoproto.onlyoneAll"))
                    if (typeof message[".gogoproto.onlyoneAll"] !== "boolean")
                        return ".gogoproto.onlyoneAll: boolean expected";
                if (message[".gogoproto.equalAll"] != null && message.hasOwnProperty(".gogoproto.equalAll"))
                    if (typeof message[".gogoproto.equalAll"] !== "boolean")
                        return ".gogoproto.equalAll: boolean expected";
                if (message[".gogoproto.descriptionAll"] != null && message.hasOwnProperty(".gogoproto.descriptionAll"))
                    if (typeof message[".gogoproto.descriptionAll"] !== "boolean")
                        return ".gogoproto.descriptionAll: boolean expected";
                if (message[".gogoproto.testgenAll"] != null && message.hasOwnProperty(".gogoproto.testgenAll"))
                    if (typeof message[".gogoproto.testgenAll"] !== "boolean")
                        return ".gogoproto.testgenAll: boolean expected";
                if (message[".gogoproto.benchgenAll"] != null && message.hasOwnProperty(".gogoproto.benchgenAll"))
                    if (typeof message[".gogoproto.benchgenAll"] !== "boolean")
                        return ".gogoproto.benchgenAll: boolean expected";
                if (message[".gogoproto.marshalerAll"] != null && message.hasOwnProperty(".gogoproto.marshalerAll"))
                    if (typeof message[".gogoproto.marshalerAll"] !== "boolean")
                        return ".gogoproto.marshalerAll: boolean expected";
                if (message[".gogoproto.unmarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unmarshalerAll"))
                    if (typeof message[".gogoproto.unmarshalerAll"] !== "boolean")
                        return ".gogoproto.unmarshalerAll: boolean expected";
                if (message[".gogoproto.stableMarshalerAll"] != null && message.hasOwnProperty(".gogoproto.stableMarshalerAll"))
                    if (typeof message[".gogoproto.stableMarshalerAll"] !== "boolean")
                        return ".gogoproto.stableMarshalerAll: boolean expected";
                if (message[".gogoproto.sizerAll"] != null && message.hasOwnProperty(".gogoproto.sizerAll"))
                    if (typeof message[".gogoproto.sizerAll"] !== "boolean")
                        return ".gogoproto.sizerAll: boolean expected";
                if (message[".gogoproto.goprotoEnumStringerAll"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumStringerAll"))
                    if (typeof message[".gogoproto.goprotoEnumStringerAll"] !== "boolean")
                        return ".gogoproto.goprotoEnumStringerAll: boolean expected";
                if (message[".gogoproto.enumStringerAll"] != null && message.hasOwnProperty(".gogoproto.enumStringerAll"))
                    if (typeof message[".gogoproto.enumStringerAll"] !== "boolean")
                        return ".gogoproto.enumStringerAll: boolean expected";
                if (message[".gogoproto.unsafeMarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unsafeMarshalerAll"))
                    if (typeof message[".gogoproto.unsafeMarshalerAll"] !== "boolean")
                        return ".gogoproto.unsafeMarshalerAll: boolean expected";
                if (message[".gogoproto.unsafeUnmarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unsafeUnmarshalerAll"))
                    if (typeof message[".gogoproto.unsafeUnmarshalerAll"] !== "boolean")
                        return ".gogoproto.unsafeUnmarshalerAll: boolean expected";
                if (message[".gogoproto.goprotoExtensionsMapAll"] != null && message.hasOwnProperty(".gogoproto.goprotoExtensionsMapAll"))
                    if (typeof message[".gogoproto.goprotoExtensionsMapAll"] !== "boolean")
                        return ".gogoproto.goprotoExtensionsMapAll: boolean expected";
                if (message[".gogoproto.goprotoUnrecognizedAll"] != null && message.hasOwnProperty(".gogoproto.goprotoUnrecognizedAll"))
                    if (typeof message[".gogoproto.goprotoUnrecognizedAll"] !== "boolean")
                        return ".gogoproto.goprotoUnrecognizedAll: boolean expected";
                if (message[".gogoproto.gogoprotoImport"] != null && message.hasOwnProperty(".gogoproto.gogoprotoImport"))
                    if (typeof message[".gogoproto.gogoprotoImport"] !== "boolean")
                        return ".gogoproto.gogoprotoImport: boolean expected";
                if (message[".gogoproto.protosizerAll"] != null && message.hasOwnProperty(".gogoproto.protosizerAll"))
                    if (typeof message[".gogoproto.protosizerAll"] !== "boolean")
                        return ".gogoproto.protosizerAll: boolean expected";
                if (message[".gogoproto.compareAll"] != null && message.hasOwnProperty(".gogoproto.compareAll"))
                    if (typeof message[".gogoproto.compareAll"] !== "boolean")
                        return ".gogoproto.compareAll: boolean expected";
                if (message[".gogoproto.typedeclAll"] != null && message.hasOwnProperty(".gogoproto.typedeclAll"))
                    if (typeof message[".gogoproto.typedeclAll"] !== "boolean")
                        return ".gogoproto.typedeclAll: boolean expected";
                if (message[".gogoproto.enumdeclAll"] != null && message.hasOwnProperty(".gogoproto.enumdeclAll"))
                    if (typeof message[".gogoproto.enumdeclAll"] !== "boolean")
                        return ".gogoproto.enumdeclAll: boolean expected";
                if (message[".gogoproto.goprotoRegistration"] != null && message.hasOwnProperty(".gogoproto.goprotoRegistration"))
                    if (typeof message[".gogoproto.goprotoRegistration"] !== "boolean")
                        return ".gogoproto.goprotoRegistration: boolean expected";
                if (message[".gogoproto.messagenameAll"] != null && message.hasOwnProperty(".gogoproto.messagenameAll"))
                    if (typeof message[".gogoproto.messagenameAll"] !== "boolean")
                        return ".gogoproto.messagenameAll: boolean expected";
                if (message[".gogoproto.goprotoSizecacheAll"] != null && message.hasOwnProperty(".gogoproto.goprotoSizecacheAll"))
                    if (typeof message[".gogoproto.goprotoSizecacheAll"] !== "boolean")
                        return ".gogoproto.goprotoSizecacheAll: boolean expected";
                if (message[".gogoproto.goprotoUnkeyedAll"] != null && message.hasOwnProperty(".gogoproto.goprotoUnkeyedAll"))
                    if (typeof message[".gogoproto.goprotoUnkeyedAll"] !== "boolean")
                        return ".gogoproto.goprotoUnkeyedAll: boolean expected";
                return null;
            };

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FileOptions} FileOptions
             */
            FileOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FileOptions)
                    return object;
                let message = new $root.google.protobuf.FileOptions();
                if (object.javaPackage != null)
                    message.javaPackage = String(object.javaPackage);
                if (object.javaOuterClassname != null)
                    message.javaOuterClassname = String(object.javaOuterClassname);
                if (object.javaMultipleFiles != null)
                    message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                if (object.javaGenerateEqualsAndHash != null)
                    message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                if (object.javaStringCheckUtf8 != null)
                    message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                switch (object.optimizeFor) {
                case "SPEED":
                case 1:
                    message.optimizeFor = 1;
                    break;
                case "CODE_SIZE":
                case 2:
                    message.optimizeFor = 2;
                    break;
                case "LITE_RUNTIME":
                case 3:
                    message.optimizeFor = 3;
                    break;
                }
                if (object.goPackage != null)
                    message.goPackage = String(object.goPackage);
                if (object.ccGenericServices != null)
                    message.ccGenericServices = Boolean(object.ccGenericServices);
                if (object.javaGenericServices != null)
                    message.javaGenericServices = Boolean(object.javaGenericServices);
                if (object.pyGenericServices != null)
                    message.pyGenericServices = Boolean(object.pyGenericServices);
                if (object.phpGenericServices != null)
                    message.phpGenericServices = Boolean(object.phpGenericServices);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.ccEnableArenas != null)
                    message.ccEnableArenas = Boolean(object.ccEnableArenas);
                if (object.objcClassPrefix != null)
                    message.objcClassPrefix = String(object.objcClassPrefix);
                if (object.csharpNamespace != null)
                    message.csharpNamespace = String(object.csharpNamespace);
                if (object.swiftPrefix != null)
                    message.swiftPrefix = String(object.swiftPrefix);
                if (object.phpClassPrefix != null)
                    message.phpClassPrefix = String(object.phpClassPrefix);
                if (object.phpNamespace != null)
                    message.phpNamespace = String(object.phpNamespace);
                if (object.phpMetadataNamespace != null)
                    message.phpMetadataNamespace = String(object.phpMetadataNamespace);
                if (object.rubyPackage != null)
                    message.rubyPackage = String(object.rubyPackage);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gogoproto.goprotoGettersAll"] != null)
                    message[".gogoproto.goprotoGettersAll"] = Boolean(object[".gogoproto.goprotoGettersAll"]);
                if (object[".gogoproto.goprotoEnumPrefixAll"] != null)
                    message[".gogoproto.goprotoEnumPrefixAll"] = Boolean(object[".gogoproto.goprotoEnumPrefixAll"]);
                if (object[".gogoproto.goprotoStringerAll"] != null)
                    message[".gogoproto.goprotoStringerAll"] = Boolean(object[".gogoproto.goprotoStringerAll"]);
                if (object[".gogoproto.verboseEqualAll"] != null)
                    message[".gogoproto.verboseEqualAll"] = Boolean(object[".gogoproto.verboseEqualAll"]);
                if (object[".gogoproto.faceAll"] != null)
                    message[".gogoproto.faceAll"] = Boolean(object[".gogoproto.faceAll"]);
                if (object[".gogoproto.gostringAll"] != null)
                    message[".gogoproto.gostringAll"] = Boolean(object[".gogoproto.gostringAll"]);
                if (object[".gogoproto.populateAll"] != null)
                    message[".gogoproto.populateAll"] = Boolean(object[".gogoproto.populateAll"]);
                if (object[".gogoproto.stringerAll"] != null)
                    message[".gogoproto.stringerAll"] = Boolean(object[".gogoproto.stringerAll"]);
                if (object[".gogoproto.onlyoneAll"] != null)
                    message[".gogoproto.onlyoneAll"] = Boolean(object[".gogoproto.onlyoneAll"]);
                if (object[".gogoproto.equalAll"] != null)
                    message[".gogoproto.equalAll"] = Boolean(object[".gogoproto.equalAll"]);
                if (object[".gogoproto.descriptionAll"] != null)
                    message[".gogoproto.descriptionAll"] = Boolean(object[".gogoproto.descriptionAll"]);
                if (object[".gogoproto.testgenAll"] != null)
                    message[".gogoproto.testgenAll"] = Boolean(object[".gogoproto.testgenAll"]);
                if (object[".gogoproto.benchgenAll"] != null)
                    message[".gogoproto.benchgenAll"] = Boolean(object[".gogoproto.benchgenAll"]);
                if (object[".gogoproto.marshalerAll"] != null)
                    message[".gogoproto.marshalerAll"] = Boolean(object[".gogoproto.marshalerAll"]);
                if (object[".gogoproto.unmarshalerAll"] != null)
                    message[".gogoproto.unmarshalerAll"] = Boolean(object[".gogoproto.unmarshalerAll"]);
                if (object[".gogoproto.stableMarshalerAll"] != null)
                    message[".gogoproto.stableMarshalerAll"] = Boolean(object[".gogoproto.stableMarshalerAll"]);
                if (object[".gogoproto.sizerAll"] != null)
                    message[".gogoproto.sizerAll"] = Boolean(object[".gogoproto.sizerAll"]);
                if (object[".gogoproto.goprotoEnumStringerAll"] != null)
                    message[".gogoproto.goprotoEnumStringerAll"] = Boolean(object[".gogoproto.goprotoEnumStringerAll"]);
                if (object[".gogoproto.enumStringerAll"] != null)
                    message[".gogoproto.enumStringerAll"] = Boolean(object[".gogoproto.enumStringerAll"]);
                if (object[".gogoproto.unsafeMarshalerAll"] != null)
                    message[".gogoproto.unsafeMarshalerAll"] = Boolean(object[".gogoproto.unsafeMarshalerAll"]);
                if (object[".gogoproto.unsafeUnmarshalerAll"] != null)
                    message[".gogoproto.unsafeUnmarshalerAll"] = Boolean(object[".gogoproto.unsafeUnmarshalerAll"]);
                if (object[".gogoproto.goprotoExtensionsMapAll"] != null)
                    message[".gogoproto.goprotoExtensionsMapAll"] = Boolean(object[".gogoproto.goprotoExtensionsMapAll"]);
                if (object[".gogoproto.goprotoUnrecognizedAll"] != null)
                    message[".gogoproto.goprotoUnrecognizedAll"] = Boolean(object[".gogoproto.goprotoUnrecognizedAll"]);
                if (object[".gogoproto.gogoprotoImport"] != null)
                    message[".gogoproto.gogoprotoImport"] = Boolean(object[".gogoproto.gogoprotoImport"]);
                if (object[".gogoproto.protosizerAll"] != null)
                    message[".gogoproto.protosizerAll"] = Boolean(object[".gogoproto.protosizerAll"]);
                if (object[".gogoproto.compareAll"] != null)
                    message[".gogoproto.compareAll"] = Boolean(object[".gogoproto.compareAll"]);
                if (object[".gogoproto.typedeclAll"] != null)
                    message[".gogoproto.typedeclAll"] = Boolean(object[".gogoproto.typedeclAll"]);
                if (object[".gogoproto.enumdeclAll"] != null)
                    message[".gogoproto.enumdeclAll"] = Boolean(object[".gogoproto.enumdeclAll"]);
                if (object[".gogoproto.goprotoRegistration"] != null)
                    message[".gogoproto.goprotoRegistration"] = Boolean(object[".gogoproto.goprotoRegistration"]);
                if (object[".gogoproto.messagenameAll"] != null)
                    message[".gogoproto.messagenameAll"] = Boolean(object[".gogoproto.messagenameAll"]);
                if (object[".gogoproto.goprotoSizecacheAll"] != null)
                    message[".gogoproto.goprotoSizecacheAll"] = Boolean(object[".gogoproto.goprotoSizecacheAll"]);
                if (object[".gogoproto.goprotoUnkeyedAll"] != null)
                    message[".gogoproto.goprotoUnkeyedAll"] = Boolean(object[".gogoproto.goprotoUnkeyedAll"]);
                return message;
            };

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FileOptions
             * @static
             * @param {google.protobuf.FileOptions} message FileOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.javaPackage = "";
                    object.javaOuterClassname = "";
                    object.optimizeFor = options.enums === String ? "SPEED" : 1;
                    object.javaMultipleFiles = false;
                    object.goPackage = "";
                    object.ccGenericServices = false;
                    object.javaGenericServices = false;
                    object.pyGenericServices = false;
                    object.javaGenerateEqualsAndHash = false;
                    object.deprecated = false;
                    object.javaStringCheckUtf8 = false;
                    object.ccEnableArenas = false;
                    object.objcClassPrefix = "";
                    object.csharpNamespace = "";
                    object.swiftPrefix = "";
                    object.phpClassPrefix = "";
                    object.phpNamespace = "";
                    object.phpGenericServices = false;
                    object.phpMetadataNamespace = "";
                    object.rubyPackage = "";
                    object[".gogoproto.goprotoGettersAll"] = false;
                    object[".gogoproto.goprotoEnumPrefixAll"] = false;
                    object[".gogoproto.goprotoStringerAll"] = false;
                    object[".gogoproto.verboseEqualAll"] = false;
                    object[".gogoproto.faceAll"] = false;
                    object[".gogoproto.gostringAll"] = false;
                    object[".gogoproto.populateAll"] = false;
                    object[".gogoproto.stringerAll"] = false;
                    object[".gogoproto.onlyoneAll"] = false;
                    object[".gogoproto.equalAll"] = false;
                    object[".gogoproto.descriptionAll"] = false;
                    object[".gogoproto.testgenAll"] = false;
                    object[".gogoproto.benchgenAll"] = false;
                    object[".gogoproto.marshalerAll"] = false;
                    object[".gogoproto.unmarshalerAll"] = false;
                    object[".gogoproto.stableMarshalerAll"] = false;
                    object[".gogoproto.sizerAll"] = false;
                    object[".gogoproto.goprotoEnumStringerAll"] = false;
                    object[".gogoproto.enumStringerAll"] = false;
                    object[".gogoproto.unsafeMarshalerAll"] = false;
                    object[".gogoproto.unsafeUnmarshalerAll"] = false;
                    object[".gogoproto.goprotoExtensionsMapAll"] = false;
                    object[".gogoproto.goprotoUnrecognizedAll"] = false;
                    object[".gogoproto.gogoprotoImport"] = false;
                    object[".gogoproto.protosizerAll"] = false;
                    object[".gogoproto.compareAll"] = false;
                    object[".gogoproto.typedeclAll"] = false;
                    object[".gogoproto.enumdeclAll"] = false;
                    object[".gogoproto.goprotoRegistration"] = false;
                    object[".gogoproto.messagenameAll"] = false;
                    object[".gogoproto.goprotoSizecacheAll"] = false;
                    object[".gogoproto.goprotoUnkeyedAll"] = false;
                }
                if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                    object.javaPackage = message.javaPackage;
                if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                    object.javaOuterClassname = message.javaOuterClassname;
                if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                    object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                    object.javaMultipleFiles = message.javaMultipleFiles;
                if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                    object.goPackage = message.goPackage;
                if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                    object.ccGenericServices = message.ccGenericServices;
                if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                    object.javaGenericServices = message.javaGenericServices;
                if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                    object.pyGenericServices = message.pyGenericServices;
                if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                    object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                    object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                    object.ccEnableArenas = message.ccEnableArenas;
                if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                    object.objcClassPrefix = message.objcClassPrefix;
                if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                    object.csharpNamespace = message.csharpNamespace;
                if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                    object.swiftPrefix = message.swiftPrefix;
                if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                    object.phpClassPrefix = message.phpClassPrefix;
                if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                    object.phpNamespace = message.phpNamespace;
                if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                    object.phpGenericServices = message.phpGenericServices;
                if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                    object.phpMetadataNamespace = message.phpMetadataNamespace;
                if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                    object.rubyPackage = message.rubyPackage;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gogoproto.goprotoGettersAll"] != null && message.hasOwnProperty(".gogoproto.goprotoGettersAll"))
                    object[".gogoproto.goprotoGettersAll"] = message[".gogoproto.goprotoGettersAll"];
                if (message[".gogoproto.goprotoEnumPrefixAll"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumPrefixAll"))
                    object[".gogoproto.goprotoEnumPrefixAll"] = message[".gogoproto.goprotoEnumPrefixAll"];
                if (message[".gogoproto.goprotoStringerAll"] != null && message.hasOwnProperty(".gogoproto.goprotoStringerAll"))
                    object[".gogoproto.goprotoStringerAll"] = message[".gogoproto.goprotoStringerAll"];
                if (message[".gogoproto.verboseEqualAll"] != null && message.hasOwnProperty(".gogoproto.verboseEqualAll"))
                    object[".gogoproto.verboseEqualAll"] = message[".gogoproto.verboseEqualAll"];
                if (message[".gogoproto.faceAll"] != null && message.hasOwnProperty(".gogoproto.faceAll"))
                    object[".gogoproto.faceAll"] = message[".gogoproto.faceAll"];
                if (message[".gogoproto.gostringAll"] != null && message.hasOwnProperty(".gogoproto.gostringAll"))
                    object[".gogoproto.gostringAll"] = message[".gogoproto.gostringAll"];
                if (message[".gogoproto.populateAll"] != null && message.hasOwnProperty(".gogoproto.populateAll"))
                    object[".gogoproto.populateAll"] = message[".gogoproto.populateAll"];
                if (message[".gogoproto.stringerAll"] != null && message.hasOwnProperty(".gogoproto.stringerAll"))
                    object[".gogoproto.stringerAll"] = message[".gogoproto.stringerAll"];
                if (message[".gogoproto.onlyoneAll"] != null && message.hasOwnProperty(".gogoproto.onlyoneAll"))
                    object[".gogoproto.onlyoneAll"] = message[".gogoproto.onlyoneAll"];
                if (message[".gogoproto.equalAll"] != null && message.hasOwnProperty(".gogoproto.equalAll"))
                    object[".gogoproto.equalAll"] = message[".gogoproto.equalAll"];
                if (message[".gogoproto.descriptionAll"] != null && message.hasOwnProperty(".gogoproto.descriptionAll"))
                    object[".gogoproto.descriptionAll"] = message[".gogoproto.descriptionAll"];
                if (message[".gogoproto.testgenAll"] != null && message.hasOwnProperty(".gogoproto.testgenAll"))
                    object[".gogoproto.testgenAll"] = message[".gogoproto.testgenAll"];
                if (message[".gogoproto.benchgenAll"] != null && message.hasOwnProperty(".gogoproto.benchgenAll"))
                    object[".gogoproto.benchgenAll"] = message[".gogoproto.benchgenAll"];
                if (message[".gogoproto.marshalerAll"] != null && message.hasOwnProperty(".gogoproto.marshalerAll"))
                    object[".gogoproto.marshalerAll"] = message[".gogoproto.marshalerAll"];
                if (message[".gogoproto.unmarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unmarshalerAll"))
                    object[".gogoproto.unmarshalerAll"] = message[".gogoproto.unmarshalerAll"];
                if (message[".gogoproto.stableMarshalerAll"] != null && message.hasOwnProperty(".gogoproto.stableMarshalerAll"))
                    object[".gogoproto.stableMarshalerAll"] = message[".gogoproto.stableMarshalerAll"];
                if (message[".gogoproto.sizerAll"] != null && message.hasOwnProperty(".gogoproto.sizerAll"))
                    object[".gogoproto.sizerAll"] = message[".gogoproto.sizerAll"];
                if (message[".gogoproto.goprotoEnumStringerAll"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumStringerAll"))
                    object[".gogoproto.goprotoEnumStringerAll"] = message[".gogoproto.goprotoEnumStringerAll"];
                if (message[".gogoproto.enumStringerAll"] != null && message.hasOwnProperty(".gogoproto.enumStringerAll"))
                    object[".gogoproto.enumStringerAll"] = message[".gogoproto.enumStringerAll"];
                if (message[".gogoproto.unsafeMarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unsafeMarshalerAll"))
                    object[".gogoproto.unsafeMarshalerAll"] = message[".gogoproto.unsafeMarshalerAll"];
                if (message[".gogoproto.unsafeUnmarshalerAll"] != null && message.hasOwnProperty(".gogoproto.unsafeUnmarshalerAll"))
                    object[".gogoproto.unsafeUnmarshalerAll"] = message[".gogoproto.unsafeUnmarshalerAll"];
                if (message[".gogoproto.goprotoExtensionsMapAll"] != null && message.hasOwnProperty(".gogoproto.goprotoExtensionsMapAll"))
                    object[".gogoproto.goprotoExtensionsMapAll"] = message[".gogoproto.goprotoExtensionsMapAll"];
                if (message[".gogoproto.goprotoUnrecognizedAll"] != null && message.hasOwnProperty(".gogoproto.goprotoUnrecognizedAll"))
                    object[".gogoproto.goprotoUnrecognizedAll"] = message[".gogoproto.goprotoUnrecognizedAll"];
                if (message[".gogoproto.gogoprotoImport"] != null && message.hasOwnProperty(".gogoproto.gogoprotoImport"))
                    object[".gogoproto.gogoprotoImport"] = message[".gogoproto.gogoprotoImport"];
                if (message[".gogoproto.protosizerAll"] != null && message.hasOwnProperty(".gogoproto.protosizerAll"))
                    object[".gogoproto.protosizerAll"] = message[".gogoproto.protosizerAll"];
                if (message[".gogoproto.compareAll"] != null && message.hasOwnProperty(".gogoproto.compareAll"))
                    object[".gogoproto.compareAll"] = message[".gogoproto.compareAll"];
                if (message[".gogoproto.typedeclAll"] != null && message.hasOwnProperty(".gogoproto.typedeclAll"))
                    object[".gogoproto.typedeclAll"] = message[".gogoproto.typedeclAll"];
                if (message[".gogoproto.enumdeclAll"] != null && message.hasOwnProperty(".gogoproto.enumdeclAll"))
                    object[".gogoproto.enumdeclAll"] = message[".gogoproto.enumdeclAll"];
                if (message[".gogoproto.goprotoRegistration"] != null && message.hasOwnProperty(".gogoproto.goprotoRegistration"))
                    object[".gogoproto.goprotoRegistration"] = message[".gogoproto.goprotoRegistration"];
                if (message[".gogoproto.messagenameAll"] != null && message.hasOwnProperty(".gogoproto.messagenameAll"))
                    object[".gogoproto.messagenameAll"] = message[".gogoproto.messagenameAll"];
                if (message[".gogoproto.goprotoSizecacheAll"] != null && message.hasOwnProperty(".gogoproto.goprotoSizecacheAll"))
                    object[".gogoproto.goprotoSizecacheAll"] = message[".gogoproto.goprotoSizecacheAll"];
                if (message[".gogoproto.goprotoUnkeyedAll"] != null && message.hasOwnProperty(".gogoproto.goprotoUnkeyedAll"))
                    object[".gogoproto.goprotoUnkeyedAll"] = message[".gogoproto.goprotoUnkeyedAll"];
                return object;
            };

            /**
             * Converts this FileOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FileOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * OptimizeMode enum.
             * @name google.protobuf.FileOptions.OptimizeMode
             * @enum {number}
             * @property {number} SPEED=1 SPEED value
             * @property {number} CODE_SIZE=2 CODE_SIZE value
             * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
             */
            FileOptions.OptimizeMode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SPEED"] = 1;
                values[valuesById[2] = "CODE_SIZE"] = 2;
                values[valuesById[3] = "LITE_RUNTIME"] = 3;
                return values;
            })();

            return FileOptions;
        })();

        protobuf.MessageOptions = (function() {

            /**
             * Properties of a MessageOptions.
             * @memberof google.protobuf
             * @interface IMessageOptions
             * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
             * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
             * @property {boolean|null} [deprecated] MessageOptions deprecated
             * @property {boolean|null} [mapEntry] MessageOptions mapEntry
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
             * @property {boolean|null} [".gogoproto.goprotoGetters"] MessageOptions .gogoproto.goprotoGetters
             * @property {boolean|null} [".gogoproto.goprotoStringer"] MessageOptions .gogoproto.goprotoStringer
             * @property {boolean|null} [".gogoproto.verboseEqual"] MessageOptions .gogoproto.verboseEqual
             * @property {boolean|null} [".gogoproto.face"] MessageOptions .gogoproto.face
             * @property {boolean|null} [".gogoproto.gostring"] MessageOptions .gogoproto.gostring
             * @property {boolean|null} [".gogoproto.populate"] MessageOptions .gogoproto.populate
             * @property {boolean|null} [".gogoproto.stringer"] MessageOptions .gogoproto.stringer
             * @property {boolean|null} [".gogoproto.onlyone"] MessageOptions .gogoproto.onlyone
             * @property {boolean|null} [".gogoproto.equal"] MessageOptions .gogoproto.equal
             * @property {boolean|null} [".gogoproto.description"] MessageOptions .gogoproto.description
             * @property {boolean|null} [".gogoproto.testgen"] MessageOptions .gogoproto.testgen
             * @property {boolean|null} [".gogoproto.benchgen"] MessageOptions .gogoproto.benchgen
             * @property {boolean|null} [".gogoproto.marshaler"] MessageOptions .gogoproto.marshaler
             * @property {boolean|null} [".gogoproto.unmarshaler"] MessageOptions .gogoproto.unmarshaler
             * @property {boolean|null} [".gogoproto.stableMarshaler"] MessageOptions .gogoproto.stableMarshaler
             * @property {boolean|null} [".gogoproto.sizer"] MessageOptions .gogoproto.sizer
             * @property {boolean|null} [".gogoproto.unsafeMarshaler"] MessageOptions .gogoproto.unsafeMarshaler
             * @property {boolean|null} [".gogoproto.unsafeUnmarshaler"] MessageOptions .gogoproto.unsafeUnmarshaler
             * @property {boolean|null} [".gogoproto.goprotoExtensionsMap"] MessageOptions .gogoproto.goprotoExtensionsMap
             * @property {boolean|null} [".gogoproto.goprotoUnrecognized"] MessageOptions .gogoproto.goprotoUnrecognized
             * @property {boolean|null} [".gogoproto.protosizer"] MessageOptions .gogoproto.protosizer
             * @property {boolean|null} [".gogoproto.compare"] MessageOptions .gogoproto.compare
             * @property {boolean|null} [".gogoproto.typedecl"] MessageOptions .gogoproto.typedecl
             * @property {boolean|null} [".gogoproto.messagename"] MessageOptions .gogoproto.messagename
             * @property {boolean|null} [".gogoproto.goprotoSizecache"] MessageOptions .gogoproto.goprotoSizecache
             * @property {boolean|null} [".gogoproto.goprotoUnkeyed"] MessageOptions .gogoproto.goprotoUnkeyed
             */

            /**
             * Constructs a new MessageOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MessageOptions.
             * @implements IMessageOptions
             * @constructor
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             */
            function MessageOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageOptions messageSetWireFormat.
             * @member {boolean} messageSetWireFormat
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.messageSetWireFormat = false;

            /**
             * MessageOptions noStandardDescriptorAccessor.
             * @member {boolean} noStandardDescriptorAccessor
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.noStandardDescriptorAccessor = false;

            /**
             * MessageOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.deprecated = false;

            /**
             * MessageOptions mapEntry.
             * @member {boolean} mapEntry
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.mapEntry = false;

            /**
             * MessageOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * MessageOptions .gogoproto.goprotoGetters.
             * @member {boolean} .gogoproto.goprotoGetters
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.goprotoGetters"] = false;

            /**
             * MessageOptions .gogoproto.goprotoStringer.
             * @member {boolean} .gogoproto.goprotoStringer
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.goprotoStringer"] = false;

            /**
             * MessageOptions .gogoproto.verboseEqual.
             * @member {boolean} .gogoproto.verboseEqual
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.verboseEqual"] = false;

            /**
             * MessageOptions .gogoproto.face.
             * @member {boolean} .gogoproto.face
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.face"] = false;

            /**
             * MessageOptions .gogoproto.gostring.
             * @member {boolean} .gogoproto.gostring
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.gostring"] = false;

            /**
             * MessageOptions .gogoproto.populate.
             * @member {boolean} .gogoproto.populate
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.populate"] = false;

            /**
             * MessageOptions .gogoproto.stringer.
             * @member {boolean} .gogoproto.stringer
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.stringer"] = false;

            /**
             * MessageOptions .gogoproto.onlyone.
             * @member {boolean} .gogoproto.onlyone
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.onlyone"] = false;

            /**
             * MessageOptions .gogoproto.equal.
             * @member {boolean} .gogoproto.equal
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.equal"] = false;

            /**
             * MessageOptions .gogoproto.description.
             * @member {boolean} .gogoproto.description
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.description"] = false;

            /**
             * MessageOptions .gogoproto.testgen.
             * @member {boolean} .gogoproto.testgen
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.testgen"] = false;

            /**
             * MessageOptions .gogoproto.benchgen.
             * @member {boolean} .gogoproto.benchgen
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.benchgen"] = false;

            /**
             * MessageOptions .gogoproto.marshaler.
             * @member {boolean} .gogoproto.marshaler
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.marshaler"] = false;

            /**
             * MessageOptions .gogoproto.unmarshaler.
             * @member {boolean} .gogoproto.unmarshaler
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.unmarshaler"] = false;

            /**
             * MessageOptions .gogoproto.stableMarshaler.
             * @member {boolean} .gogoproto.stableMarshaler
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.stableMarshaler"] = false;

            /**
             * MessageOptions .gogoproto.sizer.
             * @member {boolean} .gogoproto.sizer
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.sizer"] = false;

            /**
             * MessageOptions .gogoproto.unsafeMarshaler.
             * @member {boolean} .gogoproto.unsafeMarshaler
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.unsafeMarshaler"] = false;

            /**
             * MessageOptions .gogoproto.unsafeUnmarshaler.
             * @member {boolean} .gogoproto.unsafeUnmarshaler
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.unsafeUnmarshaler"] = false;

            /**
             * MessageOptions .gogoproto.goprotoExtensionsMap.
             * @member {boolean} .gogoproto.goprotoExtensionsMap
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.goprotoExtensionsMap"] = false;

            /**
             * MessageOptions .gogoproto.goprotoUnrecognized.
             * @member {boolean} .gogoproto.goprotoUnrecognized
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.goprotoUnrecognized"] = false;

            /**
             * MessageOptions .gogoproto.protosizer.
             * @member {boolean} .gogoproto.protosizer
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.protosizer"] = false;

            /**
             * MessageOptions .gogoproto.compare.
             * @member {boolean} .gogoproto.compare
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.compare"] = false;

            /**
             * MessageOptions .gogoproto.typedecl.
             * @member {boolean} .gogoproto.typedecl
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.typedecl"] = false;

            /**
             * MessageOptions .gogoproto.messagename.
             * @member {boolean} .gogoproto.messagename
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.messagename"] = false;

            /**
             * MessageOptions .gogoproto.goprotoSizecache.
             * @member {boolean} .gogoproto.goprotoSizecache
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.goprotoSizecache"] = false;

            /**
             * MessageOptions .gogoproto.goprotoUnkeyed.
             * @member {boolean} .gogoproto.goprotoUnkeyed
             * @memberof google.protobuf.MessageOptions
             * @instance
             */
            MessageOptions.prototype[".gogoproto.goprotoUnkeyed"] = false;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
             * @returns {google.protobuf.MessageOptions} MessageOptions instance
             */
            MessageOptions.create = function create(properties) {
                return new MessageOptions(properties);
            };

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gogoproto.goprotoGetters"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoGetters"))
                    writer.uint32(/* id 64001, wireType 0 =*/512008).bool(message[".gogoproto.goprotoGetters"]);
                if (message[".gogoproto.goprotoStringer"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoStringer"))
                    writer.uint32(/* id 64003, wireType 0 =*/512024).bool(message[".gogoproto.goprotoStringer"]);
                if (message[".gogoproto.verboseEqual"] != null && Object.hasOwnProperty.call(message, ".gogoproto.verboseEqual"))
                    writer.uint32(/* id 64004, wireType 0 =*/512032).bool(message[".gogoproto.verboseEqual"]);
                if (message[".gogoproto.face"] != null && Object.hasOwnProperty.call(message, ".gogoproto.face"))
                    writer.uint32(/* id 64005, wireType 0 =*/512040).bool(message[".gogoproto.face"]);
                if (message[".gogoproto.gostring"] != null && Object.hasOwnProperty.call(message, ".gogoproto.gostring"))
                    writer.uint32(/* id 64006, wireType 0 =*/512048).bool(message[".gogoproto.gostring"]);
                if (message[".gogoproto.populate"] != null && Object.hasOwnProperty.call(message, ".gogoproto.populate"))
                    writer.uint32(/* id 64007, wireType 0 =*/512056).bool(message[".gogoproto.populate"]);
                if (message[".gogoproto.onlyone"] != null && Object.hasOwnProperty.call(message, ".gogoproto.onlyone"))
                    writer.uint32(/* id 64009, wireType 0 =*/512072).bool(message[".gogoproto.onlyone"]);
                if (message[".gogoproto.equal"] != null && Object.hasOwnProperty.call(message, ".gogoproto.equal"))
                    writer.uint32(/* id 64013, wireType 0 =*/512104).bool(message[".gogoproto.equal"]);
                if (message[".gogoproto.description"] != null && Object.hasOwnProperty.call(message, ".gogoproto.description"))
                    writer.uint32(/* id 64014, wireType 0 =*/512112).bool(message[".gogoproto.description"]);
                if (message[".gogoproto.testgen"] != null && Object.hasOwnProperty.call(message, ".gogoproto.testgen"))
                    writer.uint32(/* id 64015, wireType 0 =*/512120).bool(message[".gogoproto.testgen"]);
                if (message[".gogoproto.benchgen"] != null && Object.hasOwnProperty.call(message, ".gogoproto.benchgen"))
                    writer.uint32(/* id 64016, wireType 0 =*/512128).bool(message[".gogoproto.benchgen"]);
                if (message[".gogoproto.marshaler"] != null && Object.hasOwnProperty.call(message, ".gogoproto.marshaler"))
                    writer.uint32(/* id 64017, wireType 0 =*/512136).bool(message[".gogoproto.marshaler"]);
                if (message[".gogoproto.unmarshaler"] != null && Object.hasOwnProperty.call(message, ".gogoproto.unmarshaler"))
                    writer.uint32(/* id 64018, wireType 0 =*/512144).bool(message[".gogoproto.unmarshaler"]);
                if (message[".gogoproto.stableMarshaler"] != null && Object.hasOwnProperty.call(message, ".gogoproto.stableMarshaler"))
                    writer.uint32(/* id 64019, wireType 0 =*/512152).bool(message[".gogoproto.stableMarshaler"]);
                if (message[".gogoproto.sizer"] != null && Object.hasOwnProperty.call(message, ".gogoproto.sizer"))
                    writer.uint32(/* id 64020, wireType 0 =*/512160).bool(message[".gogoproto.sizer"]);
                if (message[".gogoproto.unsafeMarshaler"] != null && Object.hasOwnProperty.call(message, ".gogoproto.unsafeMarshaler"))
                    writer.uint32(/* id 64023, wireType 0 =*/512184).bool(message[".gogoproto.unsafeMarshaler"]);
                if (message[".gogoproto.unsafeUnmarshaler"] != null && Object.hasOwnProperty.call(message, ".gogoproto.unsafeUnmarshaler"))
                    writer.uint32(/* id 64024, wireType 0 =*/512192).bool(message[".gogoproto.unsafeUnmarshaler"]);
                if (message[".gogoproto.goprotoExtensionsMap"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoExtensionsMap"))
                    writer.uint32(/* id 64025, wireType 0 =*/512200).bool(message[".gogoproto.goprotoExtensionsMap"]);
                if (message[".gogoproto.goprotoUnrecognized"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoUnrecognized"))
                    writer.uint32(/* id 64026, wireType 0 =*/512208).bool(message[".gogoproto.goprotoUnrecognized"]);
                if (message[".gogoproto.protosizer"] != null && Object.hasOwnProperty.call(message, ".gogoproto.protosizer"))
                    writer.uint32(/* id 64028, wireType 0 =*/512224).bool(message[".gogoproto.protosizer"]);
                if (message[".gogoproto.compare"] != null && Object.hasOwnProperty.call(message, ".gogoproto.compare"))
                    writer.uint32(/* id 64029, wireType 0 =*/512232).bool(message[".gogoproto.compare"]);
                if (message[".gogoproto.typedecl"] != null && Object.hasOwnProperty.call(message, ".gogoproto.typedecl"))
                    writer.uint32(/* id 64030, wireType 0 =*/512240).bool(message[".gogoproto.typedecl"]);
                if (message[".gogoproto.messagename"] != null && Object.hasOwnProperty.call(message, ".gogoproto.messagename"))
                    writer.uint32(/* id 64033, wireType 0 =*/512264).bool(message[".gogoproto.messagename"]);
                if (message[".gogoproto.goprotoSizecache"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoSizecache"))
                    writer.uint32(/* id 64034, wireType 0 =*/512272).bool(message[".gogoproto.goprotoSizecache"]);
                if (message[".gogoproto.goprotoUnkeyed"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoUnkeyed"))
                    writer.uint32(/* id 64035, wireType 0 =*/512280).bool(message[".gogoproto.goprotoUnkeyed"]);
                if (message[".gogoproto.stringer"] != null && Object.hasOwnProperty.call(message, ".gogoproto.stringer"))
                    writer.uint32(/* id 67008, wireType 0 =*/536064).bool(message[".gogoproto.stringer"]);
                return writer;
            };

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.messageSetWireFormat = reader.bool();
                        break;
                    case 2:
                        message.noStandardDescriptorAccessor = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 7:
                        message.mapEntry = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 64001:
                        message[".gogoproto.goprotoGetters"] = reader.bool();
                        break;
                    case 64003:
                        message[".gogoproto.goprotoStringer"] = reader.bool();
                        break;
                    case 64004:
                        message[".gogoproto.verboseEqual"] = reader.bool();
                        break;
                    case 64005:
                        message[".gogoproto.face"] = reader.bool();
                        break;
                    case 64006:
                        message[".gogoproto.gostring"] = reader.bool();
                        break;
                    case 64007:
                        message[".gogoproto.populate"] = reader.bool();
                        break;
                    case 67008:
                        message[".gogoproto.stringer"] = reader.bool();
                        break;
                    case 64009:
                        message[".gogoproto.onlyone"] = reader.bool();
                        break;
                    case 64013:
                        message[".gogoproto.equal"] = reader.bool();
                        break;
                    case 64014:
                        message[".gogoproto.description"] = reader.bool();
                        break;
                    case 64015:
                        message[".gogoproto.testgen"] = reader.bool();
                        break;
                    case 64016:
                        message[".gogoproto.benchgen"] = reader.bool();
                        break;
                    case 64017:
                        message[".gogoproto.marshaler"] = reader.bool();
                        break;
                    case 64018:
                        message[".gogoproto.unmarshaler"] = reader.bool();
                        break;
                    case 64019:
                        message[".gogoproto.stableMarshaler"] = reader.bool();
                        break;
                    case 64020:
                        message[".gogoproto.sizer"] = reader.bool();
                        break;
                    case 64023:
                        message[".gogoproto.unsafeMarshaler"] = reader.bool();
                        break;
                    case 64024:
                        message[".gogoproto.unsafeUnmarshaler"] = reader.bool();
                        break;
                    case 64025:
                        message[".gogoproto.goprotoExtensionsMap"] = reader.bool();
                        break;
                    case 64026:
                        message[".gogoproto.goprotoUnrecognized"] = reader.bool();
                        break;
                    case 64028:
                        message[".gogoproto.protosizer"] = reader.bool();
                        break;
                    case 64029:
                        message[".gogoproto.compare"] = reader.bool();
                        break;
                    case 64030:
                        message[".gogoproto.typedecl"] = reader.bool();
                        break;
                    case 64033:
                        message[".gogoproto.messagename"] = reader.bool();
                        break;
                    case 64034:
                        message[".gogoproto.goprotoSizecache"] = reader.bool();
                        break;
                    case 64035:
                        message[".gogoproto.goprotoUnkeyed"] = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MessageOptions} MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageOptions message.
             * @function verify
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    if (typeof message.messageSetWireFormat !== "boolean")
                        return "messageSetWireFormat: boolean expected";
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    if (typeof message.noStandardDescriptorAccessor !== "boolean")
                        return "noStandardDescriptorAccessor: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    if (typeof message.mapEntry !== "boolean")
                        return "mapEntry: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gogoproto.goprotoGetters"] != null && message.hasOwnProperty(".gogoproto.goprotoGetters"))
                    if (typeof message[".gogoproto.goprotoGetters"] !== "boolean")
                        return ".gogoproto.goprotoGetters: boolean expected";
                if (message[".gogoproto.goprotoStringer"] != null && message.hasOwnProperty(".gogoproto.goprotoStringer"))
                    if (typeof message[".gogoproto.goprotoStringer"] !== "boolean")
                        return ".gogoproto.goprotoStringer: boolean expected";
                if (message[".gogoproto.verboseEqual"] != null && message.hasOwnProperty(".gogoproto.verboseEqual"))
                    if (typeof message[".gogoproto.verboseEqual"] !== "boolean")
                        return ".gogoproto.verboseEqual: boolean expected";
                if (message[".gogoproto.face"] != null && message.hasOwnProperty(".gogoproto.face"))
                    if (typeof message[".gogoproto.face"] !== "boolean")
                        return ".gogoproto.face: boolean expected";
                if (message[".gogoproto.gostring"] != null && message.hasOwnProperty(".gogoproto.gostring"))
                    if (typeof message[".gogoproto.gostring"] !== "boolean")
                        return ".gogoproto.gostring: boolean expected";
                if (message[".gogoproto.populate"] != null && message.hasOwnProperty(".gogoproto.populate"))
                    if (typeof message[".gogoproto.populate"] !== "boolean")
                        return ".gogoproto.populate: boolean expected";
                if (message[".gogoproto.stringer"] != null && message.hasOwnProperty(".gogoproto.stringer"))
                    if (typeof message[".gogoproto.stringer"] !== "boolean")
                        return ".gogoproto.stringer: boolean expected";
                if (message[".gogoproto.onlyone"] != null && message.hasOwnProperty(".gogoproto.onlyone"))
                    if (typeof message[".gogoproto.onlyone"] !== "boolean")
                        return ".gogoproto.onlyone: boolean expected";
                if (message[".gogoproto.equal"] != null && message.hasOwnProperty(".gogoproto.equal"))
                    if (typeof message[".gogoproto.equal"] !== "boolean")
                        return ".gogoproto.equal: boolean expected";
                if (message[".gogoproto.description"] != null && message.hasOwnProperty(".gogoproto.description"))
                    if (typeof message[".gogoproto.description"] !== "boolean")
                        return ".gogoproto.description: boolean expected";
                if (message[".gogoproto.testgen"] != null && message.hasOwnProperty(".gogoproto.testgen"))
                    if (typeof message[".gogoproto.testgen"] !== "boolean")
                        return ".gogoproto.testgen: boolean expected";
                if (message[".gogoproto.benchgen"] != null && message.hasOwnProperty(".gogoproto.benchgen"))
                    if (typeof message[".gogoproto.benchgen"] !== "boolean")
                        return ".gogoproto.benchgen: boolean expected";
                if (message[".gogoproto.marshaler"] != null && message.hasOwnProperty(".gogoproto.marshaler"))
                    if (typeof message[".gogoproto.marshaler"] !== "boolean")
                        return ".gogoproto.marshaler: boolean expected";
                if (message[".gogoproto.unmarshaler"] != null && message.hasOwnProperty(".gogoproto.unmarshaler"))
                    if (typeof message[".gogoproto.unmarshaler"] !== "boolean")
                        return ".gogoproto.unmarshaler: boolean expected";
                if (message[".gogoproto.stableMarshaler"] != null && message.hasOwnProperty(".gogoproto.stableMarshaler"))
                    if (typeof message[".gogoproto.stableMarshaler"] !== "boolean")
                        return ".gogoproto.stableMarshaler: boolean expected";
                if (message[".gogoproto.sizer"] != null && message.hasOwnProperty(".gogoproto.sizer"))
                    if (typeof message[".gogoproto.sizer"] !== "boolean")
                        return ".gogoproto.sizer: boolean expected";
                if (message[".gogoproto.unsafeMarshaler"] != null && message.hasOwnProperty(".gogoproto.unsafeMarshaler"))
                    if (typeof message[".gogoproto.unsafeMarshaler"] !== "boolean")
                        return ".gogoproto.unsafeMarshaler: boolean expected";
                if (message[".gogoproto.unsafeUnmarshaler"] != null && message.hasOwnProperty(".gogoproto.unsafeUnmarshaler"))
                    if (typeof message[".gogoproto.unsafeUnmarshaler"] !== "boolean")
                        return ".gogoproto.unsafeUnmarshaler: boolean expected";
                if (message[".gogoproto.goprotoExtensionsMap"] != null && message.hasOwnProperty(".gogoproto.goprotoExtensionsMap"))
                    if (typeof message[".gogoproto.goprotoExtensionsMap"] !== "boolean")
                        return ".gogoproto.goprotoExtensionsMap: boolean expected";
                if (message[".gogoproto.goprotoUnrecognized"] != null && message.hasOwnProperty(".gogoproto.goprotoUnrecognized"))
                    if (typeof message[".gogoproto.goprotoUnrecognized"] !== "boolean")
                        return ".gogoproto.goprotoUnrecognized: boolean expected";
                if (message[".gogoproto.protosizer"] != null && message.hasOwnProperty(".gogoproto.protosizer"))
                    if (typeof message[".gogoproto.protosizer"] !== "boolean")
                        return ".gogoproto.protosizer: boolean expected";
                if (message[".gogoproto.compare"] != null && message.hasOwnProperty(".gogoproto.compare"))
                    if (typeof message[".gogoproto.compare"] !== "boolean")
                        return ".gogoproto.compare: boolean expected";
                if (message[".gogoproto.typedecl"] != null && message.hasOwnProperty(".gogoproto.typedecl"))
                    if (typeof message[".gogoproto.typedecl"] !== "boolean")
                        return ".gogoproto.typedecl: boolean expected";
                if (message[".gogoproto.messagename"] != null && message.hasOwnProperty(".gogoproto.messagename"))
                    if (typeof message[".gogoproto.messagename"] !== "boolean")
                        return ".gogoproto.messagename: boolean expected";
                if (message[".gogoproto.goprotoSizecache"] != null && message.hasOwnProperty(".gogoproto.goprotoSizecache"))
                    if (typeof message[".gogoproto.goprotoSizecache"] !== "boolean")
                        return ".gogoproto.goprotoSizecache: boolean expected";
                if (message[".gogoproto.goprotoUnkeyed"] != null && message.hasOwnProperty(".gogoproto.goprotoUnkeyed"))
                    if (typeof message[".gogoproto.goprotoUnkeyed"] !== "boolean")
                        return ".gogoproto.goprotoUnkeyed: boolean expected";
                return null;
            };

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MessageOptions} MessageOptions
             */
            MessageOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MessageOptions)
                    return object;
                let message = new $root.google.protobuf.MessageOptions();
                if (object.messageSetWireFormat != null)
                    message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                if (object.noStandardDescriptorAccessor != null)
                    message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.mapEntry != null)
                    message.mapEntry = Boolean(object.mapEntry);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gogoproto.goprotoGetters"] != null)
                    message[".gogoproto.goprotoGetters"] = Boolean(object[".gogoproto.goprotoGetters"]);
                if (object[".gogoproto.goprotoStringer"] != null)
                    message[".gogoproto.goprotoStringer"] = Boolean(object[".gogoproto.goprotoStringer"]);
                if (object[".gogoproto.verboseEqual"] != null)
                    message[".gogoproto.verboseEqual"] = Boolean(object[".gogoproto.verboseEqual"]);
                if (object[".gogoproto.face"] != null)
                    message[".gogoproto.face"] = Boolean(object[".gogoproto.face"]);
                if (object[".gogoproto.gostring"] != null)
                    message[".gogoproto.gostring"] = Boolean(object[".gogoproto.gostring"]);
                if (object[".gogoproto.populate"] != null)
                    message[".gogoproto.populate"] = Boolean(object[".gogoproto.populate"]);
                if (object[".gogoproto.stringer"] != null)
                    message[".gogoproto.stringer"] = Boolean(object[".gogoproto.stringer"]);
                if (object[".gogoproto.onlyone"] != null)
                    message[".gogoproto.onlyone"] = Boolean(object[".gogoproto.onlyone"]);
                if (object[".gogoproto.equal"] != null)
                    message[".gogoproto.equal"] = Boolean(object[".gogoproto.equal"]);
                if (object[".gogoproto.description"] != null)
                    message[".gogoproto.description"] = Boolean(object[".gogoproto.description"]);
                if (object[".gogoproto.testgen"] != null)
                    message[".gogoproto.testgen"] = Boolean(object[".gogoproto.testgen"]);
                if (object[".gogoproto.benchgen"] != null)
                    message[".gogoproto.benchgen"] = Boolean(object[".gogoproto.benchgen"]);
                if (object[".gogoproto.marshaler"] != null)
                    message[".gogoproto.marshaler"] = Boolean(object[".gogoproto.marshaler"]);
                if (object[".gogoproto.unmarshaler"] != null)
                    message[".gogoproto.unmarshaler"] = Boolean(object[".gogoproto.unmarshaler"]);
                if (object[".gogoproto.stableMarshaler"] != null)
                    message[".gogoproto.stableMarshaler"] = Boolean(object[".gogoproto.stableMarshaler"]);
                if (object[".gogoproto.sizer"] != null)
                    message[".gogoproto.sizer"] = Boolean(object[".gogoproto.sizer"]);
                if (object[".gogoproto.unsafeMarshaler"] != null)
                    message[".gogoproto.unsafeMarshaler"] = Boolean(object[".gogoproto.unsafeMarshaler"]);
                if (object[".gogoproto.unsafeUnmarshaler"] != null)
                    message[".gogoproto.unsafeUnmarshaler"] = Boolean(object[".gogoproto.unsafeUnmarshaler"]);
                if (object[".gogoproto.goprotoExtensionsMap"] != null)
                    message[".gogoproto.goprotoExtensionsMap"] = Boolean(object[".gogoproto.goprotoExtensionsMap"]);
                if (object[".gogoproto.goprotoUnrecognized"] != null)
                    message[".gogoproto.goprotoUnrecognized"] = Boolean(object[".gogoproto.goprotoUnrecognized"]);
                if (object[".gogoproto.protosizer"] != null)
                    message[".gogoproto.protosizer"] = Boolean(object[".gogoproto.protosizer"]);
                if (object[".gogoproto.compare"] != null)
                    message[".gogoproto.compare"] = Boolean(object[".gogoproto.compare"]);
                if (object[".gogoproto.typedecl"] != null)
                    message[".gogoproto.typedecl"] = Boolean(object[".gogoproto.typedecl"]);
                if (object[".gogoproto.messagename"] != null)
                    message[".gogoproto.messagename"] = Boolean(object[".gogoproto.messagename"]);
                if (object[".gogoproto.goprotoSizecache"] != null)
                    message[".gogoproto.goprotoSizecache"] = Boolean(object[".gogoproto.goprotoSizecache"]);
                if (object[".gogoproto.goprotoUnkeyed"] != null)
                    message[".gogoproto.goprotoUnkeyed"] = Boolean(object[".gogoproto.goprotoUnkeyed"]);
                return message;
            };

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MessageOptions
             * @static
             * @param {google.protobuf.MessageOptions} message MessageOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.messageSetWireFormat = false;
                    object.noStandardDescriptorAccessor = false;
                    object.deprecated = false;
                    object.mapEntry = false;
                    object[".gogoproto.goprotoGetters"] = false;
                    object[".gogoproto.goprotoStringer"] = false;
                    object[".gogoproto.verboseEqual"] = false;
                    object[".gogoproto.face"] = false;
                    object[".gogoproto.gostring"] = false;
                    object[".gogoproto.populate"] = false;
                    object[".gogoproto.onlyone"] = false;
                    object[".gogoproto.equal"] = false;
                    object[".gogoproto.description"] = false;
                    object[".gogoproto.testgen"] = false;
                    object[".gogoproto.benchgen"] = false;
                    object[".gogoproto.marshaler"] = false;
                    object[".gogoproto.unmarshaler"] = false;
                    object[".gogoproto.stableMarshaler"] = false;
                    object[".gogoproto.sizer"] = false;
                    object[".gogoproto.unsafeMarshaler"] = false;
                    object[".gogoproto.unsafeUnmarshaler"] = false;
                    object[".gogoproto.goprotoExtensionsMap"] = false;
                    object[".gogoproto.goprotoUnrecognized"] = false;
                    object[".gogoproto.protosizer"] = false;
                    object[".gogoproto.compare"] = false;
                    object[".gogoproto.typedecl"] = false;
                    object[".gogoproto.messagename"] = false;
                    object[".gogoproto.goprotoSizecache"] = false;
                    object[".gogoproto.goprotoUnkeyed"] = false;
                    object[".gogoproto.stringer"] = false;
                }
                if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                    object.messageSetWireFormat = message.messageSetWireFormat;
                if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                    object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                    object.mapEntry = message.mapEntry;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gogoproto.goprotoGetters"] != null && message.hasOwnProperty(".gogoproto.goprotoGetters"))
                    object[".gogoproto.goprotoGetters"] = message[".gogoproto.goprotoGetters"];
                if (message[".gogoproto.goprotoStringer"] != null && message.hasOwnProperty(".gogoproto.goprotoStringer"))
                    object[".gogoproto.goprotoStringer"] = message[".gogoproto.goprotoStringer"];
                if (message[".gogoproto.verboseEqual"] != null && message.hasOwnProperty(".gogoproto.verboseEqual"))
                    object[".gogoproto.verboseEqual"] = message[".gogoproto.verboseEqual"];
                if (message[".gogoproto.face"] != null && message.hasOwnProperty(".gogoproto.face"))
                    object[".gogoproto.face"] = message[".gogoproto.face"];
                if (message[".gogoproto.gostring"] != null && message.hasOwnProperty(".gogoproto.gostring"))
                    object[".gogoproto.gostring"] = message[".gogoproto.gostring"];
                if (message[".gogoproto.populate"] != null && message.hasOwnProperty(".gogoproto.populate"))
                    object[".gogoproto.populate"] = message[".gogoproto.populate"];
                if (message[".gogoproto.onlyone"] != null && message.hasOwnProperty(".gogoproto.onlyone"))
                    object[".gogoproto.onlyone"] = message[".gogoproto.onlyone"];
                if (message[".gogoproto.equal"] != null && message.hasOwnProperty(".gogoproto.equal"))
                    object[".gogoproto.equal"] = message[".gogoproto.equal"];
                if (message[".gogoproto.description"] != null && message.hasOwnProperty(".gogoproto.description"))
                    object[".gogoproto.description"] = message[".gogoproto.description"];
                if (message[".gogoproto.testgen"] != null && message.hasOwnProperty(".gogoproto.testgen"))
                    object[".gogoproto.testgen"] = message[".gogoproto.testgen"];
                if (message[".gogoproto.benchgen"] != null && message.hasOwnProperty(".gogoproto.benchgen"))
                    object[".gogoproto.benchgen"] = message[".gogoproto.benchgen"];
                if (message[".gogoproto.marshaler"] != null && message.hasOwnProperty(".gogoproto.marshaler"))
                    object[".gogoproto.marshaler"] = message[".gogoproto.marshaler"];
                if (message[".gogoproto.unmarshaler"] != null && message.hasOwnProperty(".gogoproto.unmarshaler"))
                    object[".gogoproto.unmarshaler"] = message[".gogoproto.unmarshaler"];
                if (message[".gogoproto.stableMarshaler"] != null && message.hasOwnProperty(".gogoproto.stableMarshaler"))
                    object[".gogoproto.stableMarshaler"] = message[".gogoproto.stableMarshaler"];
                if (message[".gogoproto.sizer"] != null && message.hasOwnProperty(".gogoproto.sizer"))
                    object[".gogoproto.sizer"] = message[".gogoproto.sizer"];
                if (message[".gogoproto.unsafeMarshaler"] != null && message.hasOwnProperty(".gogoproto.unsafeMarshaler"))
                    object[".gogoproto.unsafeMarshaler"] = message[".gogoproto.unsafeMarshaler"];
                if (message[".gogoproto.unsafeUnmarshaler"] != null && message.hasOwnProperty(".gogoproto.unsafeUnmarshaler"))
                    object[".gogoproto.unsafeUnmarshaler"] = message[".gogoproto.unsafeUnmarshaler"];
                if (message[".gogoproto.goprotoExtensionsMap"] != null && message.hasOwnProperty(".gogoproto.goprotoExtensionsMap"))
                    object[".gogoproto.goprotoExtensionsMap"] = message[".gogoproto.goprotoExtensionsMap"];
                if (message[".gogoproto.goprotoUnrecognized"] != null && message.hasOwnProperty(".gogoproto.goprotoUnrecognized"))
                    object[".gogoproto.goprotoUnrecognized"] = message[".gogoproto.goprotoUnrecognized"];
                if (message[".gogoproto.protosizer"] != null && message.hasOwnProperty(".gogoproto.protosizer"))
                    object[".gogoproto.protosizer"] = message[".gogoproto.protosizer"];
                if (message[".gogoproto.compare"] != null && message.hasOwnProperty(".gogoproto.compare"))
                    object[".gogoproto.compare"] = message[".gogoproto.compare"];
                if (message[".gogoproto.typedecl"] != null && message.hasOwnProperty(".gogoproto.typedecl"))
                    object[".gogoproto.typedecl"] = message[".gogoproto.typedecl"];
                if (message[".gogoproto.messagename"] != null && message.hasOwnProperty(".gogoproto.messagename"))
                    object[".gogoproto.messagename"] = message[".gogoproto.messagename"];
                if (message[".gogoproto.goprotoSizecache"] != null && message.hasOwnProperty(".gogoproto.goprotoSizecache"))
                    object[".gogoproto.goprotoSizecache"] = message[".gogoproto.goprotoSizecache"];
                if (message[".gogoproto.goprotoUnkeyed"] != null && message.hasOwnProperty(".gogoproto.goprotoUnkeyed"))
                    object[".gogoproto.goprotoUnkeyed"] = message[".gogoproto.goprotoUnkeyed"];
                if (message[".gogoproto.stringer"] != null && message.hasOwnProperty(".gogoproto.stringer"))
                    object[".gogoproto.stringer"] = message[".gogoproto.stringer"];
                return object;
            };

            /**
             * Converts this MessageOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MessageOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MessageOptions;
        })();

        protobuf.FieldOptions = (function() {

            /**
             * Properties of a FieldOptions.
             * @memberof google.protobuf
             * @interface IFieldOptions
             * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
             * @property {boolean|null} [packed] FieldOptions packed
             * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
             * @property {boolean|null} [lazy] FieldOptions lazy
             * @property {boolean|null} [deprecated] FieldOptions deprecated
             * @property {boolean|null} [weak] FieldOptions weak
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
             * @property {boolean|null} [".gogoproto.nullable"] FieldOptions .gogoproto.nullable
             * @property {boolean|null} [".gogoproto.embed"] FieldOptions .gogoproto.embed
             * @property {string|null} [".gogoproto.customtype"] FieldOptions .gogoproto.customtype
             * @property {string|null} [".gogoproto.customname"] FieldOptions .gogoproto.customname
             * @property {string|null} [".gogoproto.jsontag"] FieldOptions .gogoproto.jsontag
             * @property {string|null} [".gogoproto.moretags"] FieldOptions .gogoproto.moretags
             * @property {string|null} [".gogoproto.casttype"] FieldOptions .gogoproto.casttype
             * @property {string|null} [".gogoproto.castkey"] FieldOptions .gogoproto.castkey
             * @property {string|null} [".gogoproto.castvalue"] FieldOptions .gogoproto.castvalue
             * @property {boolean|null} [".gogoproto.stdtime"] FieldOptions .gogoproto.stdtime
             * @property {boolean|null} [".gogoproto.stdduration"] FieldOptions .gogoproto.stdduration
             * @property {boolean|null} [".gogoproto.wktpointer"] FieldOptions .gogoproto.wktpointer
             */

            /**
             * Constructs a new FieldOptions.
             * @memberof google.protobuf
             * @classdesc Represents a FieldOptions.
             * @implements IFieldOptions
             * @constructor
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             */
            function FieldOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FieldOptions ctype.
             * @member {google.protobuf.FieldOptions.CType} ctype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.ctype = 0;

            /**
             * FieldOptions packed.
             * @member {boolean} packed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.packed = false;

            /**
             * FieldOptions jstype.
             * @member {google.protobuf.FieldOptions.JSType} jstype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.jstype = 0;

            /**
             * FieldOptions lazy.
             * @member {boolean} lazy
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.lazy = false;

            /**
             * FieldOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.deprecated = false;

            /**
             * FieldOptions weak.
             * @member {boolean} weak
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.weak = false;

            /**
             * FieldOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * FieldOptions .gogoproto.nullable.
             * @member {boolean} .gogoproto.nullable
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gogoproto.nullable"] = false;

            /**
             * FieldOptions .gogoproto.embed.
             * @member {boolean} .gogoproto.embed
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gogoproto.embed"] = false;

            /**
             * FieldOptions .gogoproto.customtype.
             * @member {string} .gogoproto.customtype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gogoproto.customtype"] = "";

            /**
             * FieldOptions .gogoproto.customname.
             * @member {string} .gogoproto.customname
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gogoproto.customname"] = "";

            /**
             * FieldOptions .gogoproto.jsontag.
             * @member {string} .gogoproto.jsontag
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gogoproto.jsontag"] = "";

            /**
             * FieldOptions .gogoproto.moretags.
             * @member {string} .gogoproto.moretags
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gogoproto.moretags"] = "";

            /**
             * FieldOptions .gogoproto.casttype.
             * @member {string} .gogoproto.casttype
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gogoproto.casttype"] = "";

            /**
             * FieldOptions .gogoproto.castkey.
             * @member {string} .gogoproto.castkey
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gogoproto.castkey"] = "";

            /**
             * FieldOptions .gogoproto.castvalue.
             * @member {string} .gogoproto.castvalue
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gogoproto.castvalue"] = "";

            /**
             * FieldOptions .gogoproto.stdtime.
             * @member {boolean} .gogoproto.stdtime
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gogoproto.stdtime"] = false;

            /**
             * FieldOptions .gogoproto.stdduration.
             * @member {boolean} .gogoproto.stdduration
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gogoproto.stdduration"] = false;

            /**
             * FieldOptions .gogoproto.wktpointer.
             * @member {boolean} .gogoproto.wktpointer
             * @memberof google.protobuf.FieldOptions
             * @instance
             */
            FieldOptions.prototype[".gogoproto.wktpointer"] = false;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
             * @returns {google.protobuf.FieldOptions} FieldOptions instance
             */
            FieldOptions.create = function create(properties) {
                return new FieldOptions(properties);
            };

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gogoproto.nullable"] != null && Object.hasOwnProperty.call(message, ".gogoproto.nullable"))
                    writer.uint32(/* id 65001, wireType 0 =*/520008).bool(message[".gogoproto.nullable"]);
                if (message[".gogoproto.embed"] != null && Object.hasOwnProperty.call(message, ".gogoproto.embed"))
                    writer.uint32(/* id 65002, wireType 0 =*/520016).bool(message[".gogoproto.embed"]);
                if (message[".gogoproto.customtype"] != null && Object.hasOwnProperty.call(message, ".gogoproto.customtype"))
                    writer.uint32(/* id 65003, wireType 2 =*/520026).string(message[".gogoproto.customtype"]);
                if (message[".gogoproto.customname"] != null && Object.hasOwnProperty.call(message, ".gogoproto.customname"))
                    writer.uint32(/* id 65004, wireType 2 =*/520034).string(message[".gogoproto.customname"]);
                if (message[".gogoproto.jsontag"] != null && Object.hasOwnProperty.call(message, ".gogoproto.jsontag"))
                    writer.uint32(/* id 65005, wireType 2 =*/520042).string(message[".gogoproto.jsontag"]);
                if (message[".gogoproto.moretags"] != null && Object.hasOwnProperty.call(message, ".gogoproto.moretags"))
                    writer.uint32(/* id 65006, wireType 2 =*/520050).string(message[".gogoproto.moretags"]);
                if (message[".gogoproto.casttype"] != null && Object.hasOwnProperty.call(message, ".gogoproto.casttype"))
                    writer.uint32(/* id 65007, wireType 2 =*/520058).string(message[".gogoproto.casttype"]);
                if (message[".gogoproto.castkey"] != null && Object.hasOwnProperty.call(message, ".gogoproto.castkey"))
                    writer.uint32(/* id 65008, wireType 2 =*/520066).string(message[".gogoproto.castkey"]);
                if (message[".gogoproto.castvalue"] != null && Object.hasOwnProperty.call(message, ".gogoproto.castvalue"))
                    writer.uint32(/* id 65009, wireType 2 =*/520074).string(message[".gogoproto.castvalue"]);
                if (message[".gogoproto.stdtime"] != null && Object.hasOwnProperty.call(message, ".gogoproto.stdtime"))
                    writer.uint32(/* id 65010, wireType 0 =*/520080).bool(message[".gogoproto.stdtime"]);
                if (message[".gogoproto.stdduration"] != null && Object.hasOwnProperty.call(message, ".gogoproto.stdduration"))
                    writer.uint32(/* id 65011, wireType 0 =*/520088).bool(message[".gogoproto.stdduration"]);
                if (message[".gogoproto.wktpointer"] != null && Object.hasOwnProperty.call(message, ".gogoproto.wktpointer"))
                    writer.uint32(/* id 65012, wireType 0 =*/520096).bool(message[".gogoproto.wktpointer"]);
                return writer;
            };

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.ctype = reader.int32();
                        break;
                    case 2:
                        message.packed = reader.bool();
                        break;
                    case 6:
                        message.jstype = reader.int32();
                        break;
                    case 5:
                        message.lazy = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 10:
                        message.weak = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 65001:
                        message[".gogoproto.nullable"] = reader.bool();
                        break;
                    case 65002:
                        message[".gogoproto.embed"] = reader.bool();
                        break;
                    case 65003:
                        message[".gogoproto.customtype"] = reader.string();
                        break;
                    case 65004:
                        message[".gogoproto.customname"] = reader.string();
                        break;
                    case 65005:
                        message[".gogoproto.jsontag"] = reader.string();
                        break;
                    case 65006:
                        message[".gogoproto.moretags"] = reader.string();
                        break;
                    case 65007:
                        message[".gogoproto.casttype"] = reader.string();
                        break;
                    case 65008:
                        message[".gogoproto.castkey"] = reader.string();
                        break;
                    case 65009:
                        message[".gogoproto.castvalue"] = reader.string();
                        break;
                    case 65010:
                        message[".gogoproto.stdtime"] = reader.bool();
                        break;
                    case 65011:
                        message[".gogoproto.stdduration"] = reader.bool();
                        break;
                    case 65012:
                        message[".gogoproto.wktpointer"] = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FieldOptions} FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FieldOptions message.
             * @function verify
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FieldOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    switch (message.ctype) {
                    default:
                        return "ctype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.packed != null && message.hasOwnProperty("packed"))
                    if (typeof message.packed !== "boolean")
                        return "packed: boolean expected";
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    switch (message.jstype) {
                    default:
                        return "jstype: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    if (typeof message.lazy !== "boolean")
                        return "lazy: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.weak != null && message.hasOwnProperty("weak"))
                    if (typeof message.weak !== "boolean")
                        return "weak: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gogoproto.nullable"] != null && message.hasOwnProperty(".gogoproto.nullable"))
                    if (typeof message[".gogoproto.nullable"] !== "boolean")
                        return ".gogoproto.nullable: boolean expected";
                if (message[".gogoproto.embed"] != null && message.hasOwnProperty(".gogoproto.embed"))
                    if (typeof message[".gogoproto.embed"] !== "boolean")
                        return ".gogoproto.embed: boolean expected";
                if (message[".gogoproto.customtype"] != null && message.hasOwnProperty(".gogoproto.customtype"))
                    if (!$util.isString(message[".gogoproto.customtype"]))
                        return ".gogoproto.customtype: string expected";
                if (message[".gogoproto.customname"] != null && message.hasOwnProperty(".gogoproto.customname"))
                    if (!$util.isString(message[".gogoproto.customname"]))
                        return ".gogoproto.customname: string expected";
                if (message[".gogoproto.jsontag"] != null && message.hasOwnProperty(".gogoproto.jsontag"))
                    if (!$util.isString(message[".gogoproto.jsontag"]))
                        return ".gogoproto.jsontag: string expected";
                if (message[".gogoproto.moretags"] != null && message.hasOwnProperty(".gogoproto.moretags"))
                    if (!$util.isString(message[".gogoproto.moretags"]))
                        return ".gogoproto.moretags: string expected";
                if (message[".gogoproto.casttype"] != null && message.hasOwnProperty(".gogoproto.casttype"))
                    if (!$util.isString(message[".gogoproto.casttype"]))
                        return ".gogoproto.casttype: string expected";
                if (message[".gogoproto.castkey"] != null && message.hasOwnProperty(".gogoproto.castkey"))
                    if (!$util.isString(message[".gogoproto.castkey"]))
                        return ".gogoproto.castkey: string expected";
                if (message[".gogoproto.castvalue"] != null && message.hasOwnProperty(".gogoproto.castvalue"))
                    if (!$util.isString(message[".gogoproto.castvalue"]))
                        return ".gogoproto.castvalue: string expected";
                if (message[".gogoproto.stdtime"] != null && message.hasOwnProperty(".gogoproto.stdtime"))
                    if (typeof message[".gogoproto.stdtime"] !== "boolean")
                        return ".gogoproto.stdtime: boolean expected";
                if (message[".gogoproto.stdduration"] != null && message.hasOwnProperty(".gogoproto.stdduration"))
                    if (typeof message[".gogoproto.stdduration"] !== "boolean")
                        return ".gogoproto.stdduration: boolean expected";
                if (message[".gogoproto.wktpointer"] != null && message.hasOwnProperty(".gogoproto.wktpointer"))
                    if (typeof message[".gogoproto.wktpointer"] !== "boolean")
                        return ".gogoproto.wktpointer: boolean expected";
                return null;
            };

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FieldOptions} FieldOptions
             */
            FieldOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FieldOptions)
                    return object;
                let message = new $root.google.protobuf.FieldOptions();
                switch (object.ctype) {
                case "STRING":
                case 0:
                    message.ctype = 0;
                    break;
                case "CORD":
                case 1:
                    message.ctype = 1;
                    break;
                case "STRING_PIECE":
                case 2:
                    message.ctype = 2;
                    break;
                }
                if (object.packed != null)
                    message.packed = Boolean(object.packed);
                switch (object.jstype) {
                case "JS_NORMAL":
                case 0:
                    message.jstype = 0;
                    break;
                case "JS_STRING":
                case 1:
                    message.jstype = 1;
                    break;
                case "JS_NUMBER":
                case 2:
                    message.jstype = 2;
                    break;
                }
                if (object.lazy != null)
                    message.lazy = Boolean(object.lazy);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.weak != null)
                    message.weak = Boolean(object.weak);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gogoproto.nullable"] != null)
                    message[".gogoproto.nullable"] = Boolean(object[".gogoproto.nullable"]);
                if (object[".gogoproto.embed"] != null)
                    message[".gogoproto.embed"] = Boolean(object[".gogoproto.embed"]);
                if (object[".gogoproto.customtype"] != null)
                    message[".gogoproto.customtype"] = String(object[".gogoproto.customtype"]);
                if (object[".gogoproto.customname"] != null)
                    message[".gogoproto.customname"] = String(object[".gogoproto.customname"]);
                if (object[".gogoproto.jsontag"] != null)
                    message[".gogoproto.jsontag"] = String(object[".gogoproto.jsontag"]);
                if (object[".gogoproto.moretags"] != null)
                    message[".gogoproto.moretags"] = String(object[".gogoproto.moretags"]);
                if (object[".gogoproto.casttype"] != null)
                    message[".gogoproto.casttype"] = String(object[".gogoproto.casttype"]);
                if (object[".gogoproto.castkey"] != null)
                    message[".gogoproto.castkey"] = String(object[".gogoproto.castkey"]);
                if (object[".gogoproto.castvalue"] != null)
                    message[".gogoproto.castvalue"] = String(object[".gogoproto.castvalue"]);
                if (object[".gogoproto.stdtime"] != null)
                    message[".gogoproto.stdtime"] = Boolean(object[".gogoproto.stdtime"]);
                if (object[".gogoproto.stdduration"] != null)
                    message[".gogoproto.stdduration"] = Boolean(object[".gogoproto.stdduration"]);
                if (object[".gogoproto.wktpointer"] != null)
                    message[".gogoproto.wktpointer"] = Boolean(object[".gogoproto.wktpointer"]);
                return message;
            };

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FieldOptions
             * @static
             * @param {google.protobuf.FieldOptions} message FieldOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FieldOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.ctype = options.enums === String ? "STRING" : 0;
                    object.packed = false;
                    object.deprecated = false;
                    object.lazy = false;
                    object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                    object.weak = false;
                    object[".gogoproto.nullable"] = false;
                    object[".gogoproto.embed"] = false;
                    object[".gogoproto.customtype"] = "";
                    object[".gogoproto.customname"] = "";
                    object[".gogoproto.jsontag"] = "";
                    object[".gogoproto.moretags"] = "";
                    object[".gogoproto.casttype"] = "";
                    object[".gogoproto.castkey"] = "";
                    object[".gogoproto.castvalue"] = "";
                    object[".gogoproto.stdtime"] = false;
                    object[".gogoproto.stdduration"] = false;
                    object[".gogoproto.wktpointer"] = false;
                }
                if (message.ctype != null && message.hasOwnProperty("ctype"))
                    object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                if (message.packed != null && message.hasOwnProperty("packed"))
                    object.packed = message.packed;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.lazy != null && message.hasOwnProperty("lazy"))
                    object.lazy = message.lazy;
                if (message.jstype != null && message.hasOwnProperty("jstype"))
                    object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                if (message.weak != null && message.hasOwnProperty("weak"))
                    object.weak = message.weak;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gogoproto.nullable"] != null && message.hasOwnProperty(".gogoproto.nullable"))
                    object[".gogoproto.nullable"] = message[".gogoproto.nullable"];
                if (message[".gogoproto.embed"] != null && message.hasOwnProperty(".gogoproto.embed"))
                    object[".gogoproto.embed"] = message[".gogoproto.embed"];
                if (message[".gogoproto.customtype"] != null && message.hasOwnProperty(".gogoproto.customtype"))
                    object[".gogoproto.customtype"] = message[".gogoproto.customtype"];
                if (message[".gogoproto.customname"] != null && message.hasOwnProperty(".gogoproto.customname"))
                    object[".gogoproto.customname"] = message[".gogoproto.customname"];
                if (message[".gogoproto.jsontag"] != null && message.hasOwnProperty(".gogoproto.jsontag"))
                    object[".gogoproto.jsontag"] = message[".gogoproto.jsontag"];
                if (message[".gogoproto.moretags"] != null && message.hasOwnProperty(".gogoproto.moretags"))
                    object[".gogoproto.moretags"] = message[".gogoproto.moretags"];
                if (message[".gogoproto.casttype"] != null && message.hasOwnProperty(".gogoproto.casttype"))
                    object[".gogoproto.casttype"] = message[".gogoproto.casttype"];
                if (message[".gogoproto.castkey"] != null && message.hasOwnProperty(".gogoproto.castkey"))
                    object[".gogoproto.castkey"] = message[".gogoproto.castkey"];
                if (message[".gogoproto.castvalue"] != null && message.hasOwnProperty(".gogoproto.castvalue"))
                    object[".gogoproto.castvalue"] = message[".gogoproto.castvalue"];
                if (message[".gogoproto.stdtime"] != null && message.hasOwnProperty(".gogoproto.stdtime"))
                    object[".gogoproto.stdtime"] = message[".gogoproto.stdtime"];
                if (message[".gogoproto.stdduration"] != null && message.hasOwnProperty(".gogoproto.stdduration"))
                    object[".gogoproto.stdduration"] = message[".gogoproto.stdduration"];
                if (message[".gogoproto.wktpointer"] != null && message.hasOwnProperty(".gogoproto.wktpointer"))
                    object[".gogoproto.wktpointer"] = message[".gogoproto.wktpointer"];
                return object;
            };

            /**
             * Converts this FieldOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.FieldOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FieldOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * CType enum.
             * @name google.protobuf.FieldOptions.CType
             * @enum {number}
             * @property {number} STRING=0 STRING value
             * @property {number} CORD=1 CORD value
             * @property {number} STRING_PIECE=2 STRING_PIECE value
             */
            FieldOptions.CType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "STRING"] = 0;
                values[valuesById[1] = "CORD"] = 1;
                values[valuesById[2] = "STRING_PIECE"] = 2;
                return values;
            })();

            /**
             * JSType enum.
             * @name google.protobuf.FieldOptions.JSType
             * @enum {number}
             * @property {number} JS_NORMAL=0 JS_NORMAL value
             * @property {number} JS_STRING=1 JS_STRING value
             * @property {number} JS_NUMBER=2 JS_NUMBER value
             */
            FieldOptions.JSType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "JS_NORMAL"] = 0;
                values[valuesById[1] = "JS_STRING"] = 1;
                values[valuesById[2] = "JS_NUMBER"] = 2;
                return values;
            })();

            return FieldOptions;
        })();

        protobuf.OneofOptions = (function() {

            /**
             * Properties of an OneofOptions.
             * @memberof google.protobuf
             * @interface IOneofOptions
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
             */

            /**
             * Constructs a new OneofOptions.
             * @memberof google.protobuf
             * @classdesc Represents an OneofOptions.
             * @implements IOneofOptions
             * @constructor
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             */
            function OneofOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OneofOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.OneofOptions
             * @instance
             */
            OneofOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
             * @returns {google.protobuf.OneofOptions} OneofOptions instance
             */
            OneofOptions.create = function create(properties) {
                return new OneofOptions(properties);
            };

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.OneofOptions} OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OneofOptions message.
             * @function verify
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OneofOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.OneofOptions} OneofOptions
             */
            OneofOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.OneofOptions)
                    return object;
                let message = new $root.google.protobuf.OneofOptions();
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.OneofOptions
             * @static
             * @param {google.protobuf.OneofOptions} message OneofOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OneofOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this OneofOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.OneofOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OneofOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OneofOptions;
        })();

        protobuf.EnumOptions = (function() {

            /**
             * Properties of an EnumOptions.
             * @memberof google.protobuf
             * @interface IEnumOptions
             * @property {boolean|null} [allowAlias] EnumOptions allowAlias
             * @property {boolean|null} [deprecated] EnumOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
             * @property {boolean|null} [".gogoproto.goprotoEnumPrefix"] EnumOptions .gogoproto.goprotoEnumPrefix
             * @property {boolean|null} [".gogoproto.goprotoEnumStringer"] EnumOptions .gogoproto.goprotoEnumStringer
             * @property {boolean|null} [".gogoproto.enumStringer"] EnumOptions .gogoproto.enumStringer
             * @property {string|null} [".gogoproto.enumCustomname"] EnumOptions .gogoproto.enumCustomname
             * @property {boolean|null} [".gogoproto.enumdecl"] EnumOptions .gogoproto.enumdecl
             */

            /**
             * Constructs a new EnumOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumOptions.
             * @implements IEnumOptions
             * @constructor
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             */
            function EnumOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumOptions allowAlias.
             * @member {boolean} allowAlias
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.allowAlias = false;

            /**
             * EnumOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.deprecated = false;

            /**
             * EnumOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * EnumOptions .gogoproto.goprotoEnumPrefix.
             * @member {boolean} .gogoproto.goprotoEnumPrefix
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype[".gogoproto.goprotoEnumPrefix"] = false;

            /**
             * EnumOptions .gogoproto.goprotoEnumStringer.
             * @member {boolean} .gogoproto.goprotoEnumStringer
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype[".gogoproto.goprotoEnumStringer"] = false;

            /**
             * EnumOptions .gogoproto.enumStringer.
             * @member {boolean} .gogoproto.enumStringer
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype[".gogoproto.enumStringer"] = false;

            /**
             * EnumOptions .gogoproto.enumCustomname.
             * @member {string} .gogoproto.enumCustomname
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype[".gogoproto.enumCustomname"] = "";

            /**
             * EnumOptions .gogoproto.enumdecl.
             * @member {boolean} .gogoproto.enumdecl
             * @memberof google.protobuf.EnumOptions
             * @instance
             */
            EnumOptions.prototype[".gogoproto.enumdecl"] = false;

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumOptions} EnumOptions instance
             */
            EnumOptions.create = function create(properties) {
                return new EnumOptions(properties);
            };

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gogoproto.goprotoEnumPrefix"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoEnumPrefix"))
                    writer.uint32(/* id 62001, wireType 0 =*/496008).bool(message[".gogoproto.goprotoEnumPrefix"]);
                if (message[".gogoproto.goprotoEnumStringer"] != null && Object.hasOwnProperty.call(message, ".gogoproto.goprotoEnumStringer"))
                    writer.uint32(/* id 62021, wireType 0 =*/496168).bool(message[".gogoproto.goprotoEnumStringer"]);
                if (message[".gogoproto.enumStringer"] != null && Object.hasOwnProperty.call(message, ".gogoproto.enumStringer"))
                    writer.uint32(/* id 62022, wireType 0 =*/496176).bool(message[".gogoproto.enumStringer"]);
                if (message[".gogoproto.enumCustomname"] != null && Object.hasOwnProperty.call(message, ".gogoproto.enumCustomname"))
                    writer.uint32(/* id 62023, wireType 2 =*/496186).string(message[".gogoproto.enumCustomname"]);
                if (message[".gogoproto.enumdecl"] != null && Object.hasOwnProperty.call(message, ".gogoproto.enumdecl"))
                    writer.uint32(/* id 62024, wireType 0 =*/496192).bool(message[".gogoproto.enumdecl"]);
                return writer;
            };

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.allowAlias = reader.bool();
                        break;
                    case 3:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 62001:
                        message[".gogoproto.goprotoEnumPrefix"] = reader.bool();
                        break;
                    case 62021:
                        message[".gogoproto.goprotoEnumStringer"] = reader.bool();
                        break;
                    case 62022:
                        message[".gogoproto.enumStringer"] = reader.bool();
                        break;
                    case 62023:
                        message[".gogoproto.enumCustomname"] = reader.string();
                        break;
                    case 62024:
                        message[".gogoproto.enumdecl"] = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumOptions} EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumOptions message.
             * @function verify
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    if (typeof message.allowAlias !== "boolean")
                        return "allowAlias: boolean expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gogoproto.goprotoEnumPrefix"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumPrefix"))
                    if (typeof message[".gogoproto.goprotoEnumPrefix"] !== "boolean")
                        return ".gogoproto.goprotoEnumPrefix: boolean expected";
                if (message[".gogoproto.goprotoEnumStringer"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumStringer"))
                    if (typeof message[".gogoproto.goprotoEnumStringer"] !== "boolean")
                        return ".gogoproto.goprotoEnumStringer: boolean expected";
                if (message[".gogoproto.enumStringer"] != null && message.hasOwnProperty(".gogoproto.enumStringer"))
                    if (typeof message[".gogoproto.enumStringer"] !== "boolean")
                        return ".gogoproto.enumStringer: boolean expected";
                if (message[".gogoproto.enumCustomname"] != null && message.hasOwnProperty(".gogoproto.enumCustomname"))
                    if (!$util.isString(message[".gogoproto.enumCustomname"]))
                        return ".gogoproto.enumCustomname: string expected";
                if (message[".gogoproto.enumdecl"] != null && message.hasOwnProperty(".gogoproto.enumdecl"))
                    if (typeof message[".gogoproto.enumdecl"] !== "boolean")
                        return ".gogoproto.enumdecl: boolean expected";
                return null;
            };

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumOptions} EnumOptions
             */
            EnumOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumOptions)
                    return object;
                let message = new $root.google.protobuf.EnumOptions();
                if (object.allowAlias != null)
                    message.allowAlias = Boolean(object.allowAlias);
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gogoproto.goprotoEnumPrefix"] != null)
                    message[".gogoproto.goprotoEnumPrefix"] = Boolean(object[".gogoproto.goprotoEnumPrefix"]);
                if (object[".gogoproto.goprotoEnumStringer"] != null)
                    message[".gogoproto.goprotoEnumStringer"] = Boolean(object[".gogoproto.goprotoEnumStringer"]);
                if (object[".gogoproto.enumStringer"] != null)
                    message[".gogoproto.enumStringer"] = Boolean(object[".gogoproto.enumStringer"]);
                if (object[".gogoproto.enumCustomname"] != null)
                    message[".gogoproto.enumCustomname"] = String(object[".gogoproto.enumCustomname"]);
                if (object[".gogoproto.enumdecl"] != null)
                    message[".gogoproto.enumdecl"] = Boolean(object[".gogoproto.enumdecl"]);
                return message;
            };

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumOptions
             * @static
             * @param {google.protobuf.EnumOptions} message EnumOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.allowAlias = false;
                    object.deprecated = false;
                    object[".gogoproto.goprotoEnumPrefix"] = false;
                    object[".gogoproto.goprotoEnumStringer"] = false;
                    object[".gogoproto.enumStringer"] = false;
                    object[".gogoproto.enumCustomname"] = "";
                    object[".gogoproto.enumdecl"] = false;
                }
                if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                    object.allowAlias = message.allowAlias;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gogoproto.goprotoEnumPrefix"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumPrefix"))
                    object[".gogoproto.goprotoEnumPrefix"] = message[".gogoproto.goprotoEnumPrefix"];
                if (message[".gogoproto.goprotoEnumStringer"] != null && message.hasOwnProperty(".gogoproto.goprotoEnumStringer"))
                    object[".gogoproto.goprotoEnumStringer"] = message[".gogoproto.goprotoEnumStringer"];
                if (message[".gogoproto.enumStringer"] != null && message.hasOwnProperty(".gogoproto.enumStringer"))
                    object[".gogoproto.enumStringer"] = message[".gogoproto.enumStringer"];
                if (message[".gogoproto.enumCustomname"] != null && message.hasOwnProperty(".gogoproto.enumCustomname"))
                    object[".gogoproto.enumCustomname"] = message[".gogoproto.enumCustomname"];
                if (message[".gogoproto.enumdecl"] != null && message.hasOwnProperty(".gogoproto.enumdecl"))
                    object[".gogoproto.enumdecl"] = message[".gogoproto.enumdecl"];
                return object;
            };

            /**
             * Converts this EnumOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumOptions;
        })();

        protobuf.EnumValueOptions = (function() {

            /**
             * Properties of an EnumValueOptions.
             * @memberof google.protobuf
             * @interface IEnumValueOptions
             * @property {boolean|null} [deprecated] EnumValueOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
             * @property {string|null} [".gogoproto.enumvalueCustomname"] EnumValueOptions .gogoproto.enumvalueCustomname
             */

            /**
             * Constructs a new EnumValueOptions.
             * @memberof google.protobuf
             * @classdesc Represents an EnumValueOptions.
             * @implements IEnumValueOptions
             * @constructor
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             */
            function EnumValueOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EnumValueOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.deprecated = false;

            /**
             * EnumValueOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * EnumValueOptions .gogoproto.enumvalueCustomname.
             * @member {string} .gogoproto.enumvalueCustomname
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             */
            EnumValueOptions.prototype[".gogoproto.enumvalueCustomname"] = "";

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
             */
            EnumValueOptions.create = function create(properties) {
                return new EnumValueOptions(properties);
            };

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                if (message[".gogoproto.enumvalueCustomname"] != null && Object.hasOwnProperty.call(message, ".gogoproto.enumvalueCustomname"))
                    writer.uint32(/* id 66001, wireType 2 =*/528010).string(message[".gogoproto.enumvalueCustomname"]);
                return writer;
            };

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    case 66001:
                        message[".gogoproto.enumvalueCustomname"] = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EnumValueOptions message.
             * @function verify
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EnumValueOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                if (message[".gogoproto.enumvalueCustomname"] != null && message.hasOwnProperty(".gogoproto.enumvalueCustomname"))
                    if (!$util.isString(message[".gogoproto.enumvalueCustomname"]))
                        return ".gogoproto.enumvalueCustomname: string expected";
                return null;
            };

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
             */
            EnumValueOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.EnumValueOptions)
                    return object;
                let message = new $root.google.protobuf.EnumValueOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                if (object[".gogoproto.enumvalueCustomname"] != null)
                    message[".gogoproto.enumvalueCustomname"] = String(object[".gogoproto.enumvalueCustomname"]);
                return message;
            };

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.EnumValueOptions
             * @static
             * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EnumValueOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object[".gogoproto.enumvalueCustomname"] = "";
                }
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                if (message[".gogoproto.enumvalueCustomname"] != null && message.hasOwnProperty(".gogoproto.enumvalueCustomname"))
                    object[".gogoproto.enumvalueCustomname"] = message[".gogoproto.enumvalueCustomname"];
                return object;
            };

            /**
             * Converts this EnumValueOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.EnumValueOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EnumValueOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return EnumValueOptions;
        })();

        protobuf.ServiceOptions = (function() {

            /**
             * Properties of a ServiceOptions.
             * @memberof google.protobuf
             * @interface IServiceOptions
             * @property {boolean|null} [deprecated] ServiceOptions deprecated
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
             */

            /**
             * Constructs a new ServiceOptions.
             * @memberof google.protobuf
             * @classdesc Represents a ServiceOptions.
             * @implements IServiceOptions
             * @constructor
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             */
            function ServiceOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.deprecated = false;

            /**
             * ServiceOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.ServiceOptions
             * @instance
             */
            ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
             * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
             */
            ServiceOptions.create = function create(properties) {
                return new ServiceOptions(properties);
            };

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceOptions message.
             * @function verify
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ServiceOptions} ServiceOptions
             */
            ServiceOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ServiceOptions)
                    return object;
                let message = new $root.google.protobuf.ServiceOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ServiceOptions
             * @static
             * @param {google.protobuf.ServiceOptions} message ServiceOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults)
                    object.deprecated = false;
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this ServiceOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.ServiceOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceOptions;
        })();

        protobuf.MethodOptions = (function() {

            /**
             * Properties of a MethodOptions.
             * @memberof google.protobuf
             * @interface IMethodOptions
             * @property {boolean|null} [deprecated] MethodOptions deprecated
             * @property {google.protobuf.MethodOptions.IdempotencyLevel|null} [idempotencyLevel] MethodOptions idempotencyLevel
             * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
             */

            /**
             * Constructs a new MethodOptions.
             * @memberof google.protobuf
             * @classdesc Represents a MethodOptions.
             * @implements IMethodOptions
             * @constructor
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             */
            function MethodOptions(properties) {
                this.uninterpretedOption = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MethodOptions deprecated.
             * @member {boolean} deprecated
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.deprecated = false;

            /**
             * MethodOptions idempotencyLevel.
             * @member {google.protobuf.MethodOptions.IdempotencyLevel} idempotencyLevel
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.idempotencyLevel = 0;

            /**
             * MethodOptions uninterpretedOption.
             * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
             * @memberof google.protobuf.MethodOptions
             * @instance
             */
            MethodOptions.prototype.uninterpretedOption = $util.emptyArray;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @function create
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
             * @returns {google.protobuf.MethodOptions} MethodOptions instance
             */
            MethodOptions.create = function create(properties) {
                return new MethodOptions(properties);
            };

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                    writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                if (message.idempotencyLevel != null && Object.hasOwnProperty.call(message, "idempotencyLevel"))
                    writer.uint32(/* id 34, wireType 0 =*/272).int32(message.idempotencyLevel);
                if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                    for (let i = 0; i < message.uninterpretedOption.length; ++i)
                        $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 33:
                        message.deprecated = reader.bool();
                        break;
                    case 34:
                        message.idempotencyLevel = reader.int32();
                        break;
                    case 999:
                        if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                            message.uninterpretedOption = [];
                        message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.MethodOptions} MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MethodOptions message.
             * @function verify
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MethodOptions.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    if (typeof message.deprecated !== "boolean")
                        return "deprecated: boolean expected";
                if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                    switch (message.idempotencyLevel) {
                    default:
                        return "idempotencyLevel: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                    if (!Array.isArray(message.uninterpretedOption))
                        return "uninterpretedOption: array expected";
                    for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                        if (error)
                            return "uninterpretedOption." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.MethodOptions} MethodOptions
             */
            MethodOptions.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.MethodOptions)
                    return object;
                let message = new $root.google.protobuf.MethodOptions();
                if (object.deprecated != null)
                    message.deprecated = Boolean(object.deprecated);
                switch (object.idempotencyLevel) {
                case "IDEMPOTENCY_UNKNOWN":
                case 0:
                    message.idempotencyLevel = 0;
                    break;
                case "NO_SIDE_EFFECTS":
                case 1:
                    message.idempotencyLevel = 1;
                    break;
                case "IDEMPOTENT":
                case 2:
                    message.idempotencyLevel = 2;
                    break;
                }
                if (object.uninterpretedOption) {
                    if (!Array.isArray(object.uninterpretedOption))
                        throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                    message.uninterpretedOption = [];
                    for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                        if (typeof object.uninterpretedOption[i] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                        message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.MethodOptions
             * @static
             * @param {google.protobuf.MethodOptions} message MethodOptions
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MethodOptions.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.uninterpretedOption = [];
                if (options.defaults) {
                    object.deprecated = false;
                    object.idempotencyLevel = options.enums === String ? "IDEMPOTENCY_UNKNOWN" : 0;
                }
                if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                    object.deprecated = message.deprecated;
                if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                    object.idempotencyLevel = options.enums === String ? $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotencyLevel] : message.idempotencyLevel;
                if (message.uninterpretedOption && message.uninterpretedOption.length) {
                    object.uninterpretedOption = [];
                    for (let j = 0; j < message.uninterpretedOption.length; ++j)
                        object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                }
                return object;
            };

            /**
             * Converts this MethodOptions to JSON.
             * @function toJSON
             * @memberof google.protobuf.MethodOptions
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MethodOptions.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * IdempotencyLevel enum.
             * @name google.protobuf.MethodOptions.IdempotencyLevel
             * @enum {number}
             * @property {number} IDEMPOTENCY_UNKNOWN=0 IDEMPOTENCY_UNKNOWN value
             * @property {number} NO_SIDE_EFFECTS=1 NO_SIDE_EFFECTS value
             * @property {number} IDEMPOTENT=2 IDEMPOTENT value
             */
            MethodOptions.IdempotencyLevel = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "IDEMPOTENCY_UNKNOWN"] = 0;
                values[valuesById[1] = "NO_SIDE_EFFECTS"] = 1;
                values[valuesById[2] = "IDEMPOTENT"] = 2;
                return values;
            })();

            return MethodOptions;
        })();

        protobuf.UninterpretedOption = (function() {

            /**
             * Properties of an UninterpretedOption.
             * @memberof google.protobuf
             * @interface IUninterpretedOption
             * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
             * @property {string|null} [identifierValue] UninterpretedOption identifierValue
             * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
             * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
             * @property {number|null} [doubleValue] UninterpretedOption doubleValue
             * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
             * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
             */

            /**
             * Constructs a new UninterpretedOption.
             * @memberof google.protobuf
             * @classdesc Represents an UninterpretedOption.
             * @implements IUninterpretedOption
             * @constructor
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             */
            function UninterpretedOption(properties) {
                this.name = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UninterpretedOption name.
             * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.name = $util.emptyArray;

            /**
             * UninterpretedOption identifierValue.
             * @member {string} identifierValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.identifierValue = "";

            /**
             * UninterpretedOption positiveIntValue.
             * @member {number|Long} positiveIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UninterpretedOption negativeIntValue.
             * @member {number|Long} negativeIntValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * UninterpretedOption doubleValue.
             * @member {number} doubleValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.doubleValue = 0;

            /**
             * UninterpretedOption stringValue.
             * @member {Uint8Array} stringValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.stringValue = $util.newBuffer([]);

            /**
             * UninterpretedOption aggregateValue.
             * @member {string} aggregateValue
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             */
            UninterpretedOption.prototype.aggregateValue = "";

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
             */
            UninterpretedOption.create = function create(properties) {
                return new UninterpretedOption(properties);
            };

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.name.length)
                    for (let i = 0; i < message.name.length; ++i)
                        $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                return writer;
            };

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        if (!(message.name && message.name.length))
                            message.name = [];
                        message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.identifierValue = reader.string();
                        break;
                    case 4:
                        message.positiveIntValue = reader.uint64();
                        break;
                    case 5:
                        message.negativeIntValue = reader.int64();
                        break;
                    case 6:
                        message.doubleValue = reader.double();
                        break;
                    case 7:
                        message.stringValue = reader.bytes();
                        break;
                    case 8:
                        message.aggregateValue = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UninterpretedOption message.
             * @function verify
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UninterpretedOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (let i = 0; i < message.name.length; ++i) {
                        let error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                        if (error)
                            return "name." + error;
                    }
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    if (!$util.isString(message.identifierValue))
                        return "identifierValue: string expected";
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                        return "positiveIntValue: integer|Long expected";
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                        return "negativeIntValue: integer|Long expected";
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    if (typeof message.doubleValue !== "number")
                        return "doubleValue: number expected";
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                        return "stringValue: buffer expected";
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    if (!$util.isString(message.aggregateValue))
                        return "aggregateValue: string expected";
                return null;
            };

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
             */
            UninterpretedOption.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UninterpretedOption)
                    return object;
                let message = new $root.google.protobuf.UninterpretedOption();
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                    message.name = [];
                    for (let i = 0; i < object.name.length; ++i) {
                        if (typeof object.name[i] !== "object")
                            throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                        message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                    }
                }
                if (object.identifierValue != null)
                    message.identifierValue = String(object.identifierValue);
                if (object.positiveIntValue != null)
                    if ($util.Long)
                        (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                    else if (typeof object.positiveIntValue === "string")
                        message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                    else if (typeof object.positiveIntValue === "number")
                        message.positiveIntValue = object.positiveIntValue;
                    else if (typeof object.positiveIntValue === "object")
                        message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                if (object.negativeIntValue != null)
                    if ($util.Long)
                        (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                    else if (typeof object.negativeIntValue === "string")
                        message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                    else if (typeof object.negativeIntValue === "number")
                        message.negativeIntValue = object.negativeIntValue;
                    else if (typeof object.negativeIntValue === "object")
                        message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                if (object.doubleValue != null)
                    message.doubleValue = Number(object.doubleValue);
                if (object.stringValue != null)
                    if (typeof object.stringValue === "string")
                        $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                    else if (object.stringValue.length)
                        message.stringValue = object.stringValue;
                if (object.aggregateValue != null)
                    message.aggregateValue = String(object.aggregateValue);
                return message;
            };

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UninterpretedOption
             * @static
             * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UninterpretedOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.name = [];
                if (options.defaults) {
                    object.identifierValue = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.positiveIntValue = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.negativeIntValue = options.longs === String ? "0" : 0;
                    object.doubleValue = 0;
                    if (options.bytes === String)
                        object.stringValue = "";
                    else {
                        object.stringValue = [];
                        if (options.bytes !== Array)
                            object.stringValue = $util.newBuffer(object.stringValue);
                    }
                    object.aggregateValue = "";
                }
                if (message.name && message.name.length) {
                    object.name = [];
                    for (let j = 0; j < message.name.length; ++j)
                        object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                }
                if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                    object.identifierValue = message.identifierValue;
                if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                    if (typeof message.positiveIntValue === "number")
                        object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                    else
                        object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                    if (typeof message.negativeIntValue === "number")
                        object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                    else
                        object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                    object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                    object.aggregateValue = message.aggregateValue;
                return object;
            };

            /**
             * Converts this UninterpretedOption to JSON.
             * @function toJSON
             * @memberof google.protobuf.UninterpretedOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UninterpretedOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            UninterpretedOption.NamePart = (function() {

                /**
                 * Properties of a NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @interface INamePart
                 * @property {string} namePart NamePart namePart
                 * @property {boolean} isExtension NamePart isExtension
                 */

                /**
                 * Constructs a new NamePart.
                 * @memberof google.protobuf.UninterpretedOption
                 * @classdesc Represents a NamePart.
                 * @implements INamePart
                 * @constructor
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 */
                function NamePart(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * NamePart namePart.
                 * @member {string} namePart
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.namePart = "";

                /**
                 * NamePart isExtension.
                 * @member {boolean} isExtension
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 */
                NamePart.prototype.isExtension = false;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                 */
                NamePart.create = function create(properties) {
                    return new NamePart(properties);
                };

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                    return writer;
                };

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.namePart = reader.string();
                            break;
                        case 2:
                            message.isExtension = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    if (!message.hasOwnProperty("namePart"))
                        throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                    if (!message.hasOwnProperty("isExtension"))
                        throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                    return message;
                };

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NamePart.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a NamePart message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NamePart.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (!$util.isString(message.namePart))
                        return "namePart: string expected";
                    if (typeof message.isExtension !== "boolean")
                        return "isExtension: boolean expected";
                    return null;
                };

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                 */
                NamePart.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                        return object;
                    let message = new $root.google.protobuf.UninterpretedOption.NamePart();
                    if (object.namePart != null)
                        message.namePart = String(object.namePart);
                    if (object.isExtension != null)
                        message.isExtension = Boolean(object.isExtension);
                    return message;
                };

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @static
                 * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NamePart.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.namePart = "";
                        object.isExtension = false;
                    }
                    if (message.namePart != null && message.hasOwnProperty("namePart"))
                        object.namePart = message.namePart;
                    if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                        object.isExtension = message.isExtension;
                    return object;
                };

                /**
                 * Converts this NamePart to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption.NamePart
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NamePart.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return NamePart;
            })();

            return UninterpretedOption;
        })();

        protobuf.SourceCodeInfo = (function() {

            /**
             * Properties of a SourceCodeInfo.
             * @memberof google.protobuf
             * @interface ISourceCodeInfo
             * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
             */

            /**
             * Constructs a new SourceCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a SourceCodeInfo.
             * @implements ISourceCodeInfo
             * @constructor
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             */
            function SourceCodeInfo(properties) {
                this.location = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SourceCodeInfo location.
             * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             */
            SourceCodeInfo.prototype.location = $util.emptyArray;

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
             */
            SourceCodeInfo.create = function create(properties) {
                return new SourceCodeInfo(properties);
            };

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.location != null && message.location.length)
                    for (let i = 0; i < message.location.length; ++i)
                        $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.location && message.location.length))
                            message.location = [];
                        message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SourceCodeInfo message.
             * @function verify
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SourceCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.location != null && message.hasOwnProperty("location")) {
                    if (!Array.isArray(message.location))
                        return "location: array expected";
                    for (let i = 0; i < message.location.length; ++i) {
                        let error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                        if (error)
                            return "location." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
             */
            SourceCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.SourceCodeInfo)
                    return object;
                let message = new $root.google.protobuf.SourceCodeInfo();
                if (object.location) {
                    if (!Array.isArray(object.location))
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                    message.location = [];
                    for (let i = 0; i < object.location.length; ++i) {
                        if (typeof object.location[i] !== "object")
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                        message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.SourceCodeInfo
             * @static
             * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SourceCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.location = [];
                if (message.location && message.location.length) {
                    object.location = [];
                    for (let j = 0; j < message.location.length; ++j)
                        object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                }
                return object;
            };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.SourceCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SourceCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            SourceCodeInfo.Location = (function() {

                /**
                 * Properties of a Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @interface ILocation
                 * @property {Array.<number>|null} [path] Location path
                 * @property {Array.<number>|null} [span] Location span
                 * @property {string|null} [leadingComments] Location leadingComments
                 * @property {string|null} [trailingComments] Location trailingComments
                 * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                 */

                /**
                 * Constructs a new Location.
                 * @memberof google.protobuf.SourceCodeInfo
                 * @classdesc Represents a Location.
                 * @implements ILocation
                 * @constructor
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 */
                function Location(properties) {
                    this.path = [];
                    this.span = [];
                    this.leadingDetachedComments = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Location path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.path = $util.emptyArray;

                /**
                 * Location span.
                 * @member {Array.<number>} span
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.span = $util.emptyArray;

                /**
                 * Location leadingComments.
                 * @member {string} leadingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingComments = "";

                /**
                 * Location trailingComments.
                 * @member {string} trailingComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.trailingComments = "";

                /**
                 * Location leadingDetachedComments.
                 * @member {Array.<string>} leadingDetachedComments
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 */
                Location.prototype.leadingDetachedComments = $util.emptyArray;

                /**
                 * Creates a new Location instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                 */
                Location.create = function create(properties) {
                    return new Location(properties);
                };

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.span != null && message.span.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (let i = 0; i < message.span.length; ++i)
                            writer.int32(message.span[i]);
                        writer.ldelim();
                    }
                    if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                    if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                    if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                        for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Location.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            if (!(message.span && message.span.length))
                                message.span = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.span.push(reader.int32());
                            } else
                                message.span.push(reader.int32());
                            break;
                        case 3:
                            message.leadingComments = reader.string();
                            break;
                        case 4:
                            message.trailingComments = reader.string();
                            break;
                        case 6:
                            if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                message.leadingDetachedComments = [];
                            message.leadingDetachedComments.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Location.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Location message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Location.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (let i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.span != null && message.hasOwnProperty("span")) {
                        if (!Array.isArray(message.span))
                            return "span: array expected";
                        for (let i = 0; i < message.span.length; ++i)
                            if (!$util.isInteger(message.span[i]))
                                return "span: integer[] expected";
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        if (!$util.isString(message.leadingComments))
                            return "leadingComments: string expected";
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        if (!$util.isString(message.trailingComments))
                            return "trailingComments: string expected";
                    if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                        if (!Array.isArray(message.leadingDetachedComments))
                            return "leadingDetachedComments: array expected";
                        for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                            if (!$util.isString(message.leadingDetachedComments[i]))
                                return "leadingDetachedComments: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo.Location} Location
                 */
                Location.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                        return object;
                    let message = new $root.google.protobuf.SourceCodeInfo.Location();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                        message.path = [];
                        for (let i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.span) {
                        if (!Array.isArray(object.span))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                        message.span = [];
                        for (let i = 0; i < object.span.length; ++i)
                            message.span[i] = object.span[i] | 0;
                    }
                    if (object.leadingComments != null)
                        message.leadingComments = String(object.leadingComments);
                    if (object.trailingComments != null)
                        message.trailingComments = String(object.trailingComments);
                    if (object.leadingDetachedComments) {
                        if (!Array.isArray(object.leadingDetachedComments))
                            throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                        message.leadingDetachedComments = [];
                        for (let i = 0; i < object.leadingDetachedComments.length; ++i)
                            message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @static
                 * @param {google.protobuf.SourceCodeInfo.Location} message Location
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Location.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.path = [];
                        object.span = [];
                        object.leadingDetachedComments = [];
                    }
                    if (options.defaults) {
                        object.leadingComments = "";
                        object.trailingComments = "";
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (let j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.span && message.span.length) {
                        object.span = [];
                        for (let j = 0; j < message.span.length; ++j)
                            object.span[j] = message.span[j];
                    }
                    if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                        object.leadingComments = message.leadingComments;
                    if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                        object.trailingComments = message.trailingComments;
                    if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                        object.leadingDetachedComments = [];
                        for (let j = 0; j < message.leadingDetachedComments.length; ++j)
                            object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                    }
                    return object;
                };

                /**
                 * Converts this Location to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo.Location
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Location.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Location;
            })();

            return SourceCodeInfo;
        })();

        protobuf.GeneratedCodeInfo = (function() {

            /**
             * Properties of a GeneratedCodeInfo.
             * @memberof google.protobuf
             * @interface IGeneratedCodeInfo
             * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
             */

            /**
             * Constructs a new GeneratedCodeInfo.
             * @memberof google.protobuf
             * @classdesc Represents a GeneratedCodeInfo.
             * @implements IGeneratedCodeInfo
             * @constructor
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             */
            function GeneratedCodeInfo(properties) {
                this.annotation = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GeneratedCodeInfo annotation.
             * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             */
            GeneratedCodeInfo.prototype.annotation = $util.emptyArray;

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @function create
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
             */
            GeneratedCodeInfo.create = function create(properties) {
                return new GeneratedCodeInfo(properties);
            };

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotation != null && message.annotation.length)
                    for (let i = 0; i < message.annotation.length; ++i)
                        $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.annotation && message.annotation.length))
                            message.annotation = [];
                        message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GeneratedCodeInfo message.
             * @function verify
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GeneratedCodeInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.annotation != null && message.hasOwnProperty("annotation")) {
                    if (!Array.isArray(message.annotation))
                        return "annotation: array expected";
                    for (let i = 0; i < message.annotation.length; ++i) {
                        let error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                        if (error)
                            return "annotation." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
             */
            GeneratedCodeInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                    return object;
                let message = new $root.google.protobuf.GeneratedCodeInfo();
                if (object.annotation) {
                    if (!Array.isArray(object.annotation))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                    message.annotation = [];
                    for (let i = 0; i < object.annotation.length; ++i) {
                        if (typeof object.annotation[i] !== "object")
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                        message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.GeneratedCodeInfo
             * @static
             * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GeneratedCodeInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.annotation = [];
                if (message.annotation && message.annotation.length) {
                    object.annotation = [];
                    for (let j = 0; j < message.annotation.length; ++j)
                        object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                }
                return object;
            };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @function toJSON
             * @memberof google.protobuf.GeneratedCodeInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            GeneratedCodeInfo.Annotation = (function() {

                /**
                 * Properties of an Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @interface IAnnotation
                 * @property {Array.<number>|null} [path] Annotation path
                 * @property {string|null} [sourceFile] Annotation sourceFile
                 * @property {number|null} [begin] Annotation begin
                 * @property {number|null} [end] Annotation end
                 */

                /**
                 * Constructs a new Annotation.
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @classdesc Represents an Annotation.
                 * @implements IAnnotation
                 * @constructor
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 */
                function Annotation(properties) {
                    this.path = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Annotation path.
                 * @member {Array.<number>} path
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.path = $util.emptyArray;

                /**
                 * Annotation sourceFile.
                 * @member {string} sourceFile
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.sourceFile = "";

                /**
                 * Annotation begin.
                 * @member {number} begin
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.begin = 0;

                /**
                 * Annotation end.
                 * @member {number} end
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 */
                Annotation.prototype.end = 0;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                 */
                Annotation.create = function create(properties) {
                    return new Annotation(properties);
                };

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.path != null && message.path.length) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork();
                        for (let i = 0; i < message.path.length; ++i)
                            writer.int32(message.path[i]);
                        writer.ldelim();
                    }
                    if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                    if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                    if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                    return writer;
                };

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.path && message.path.length))
                                message.path = [];
                            if ((tag & 7) === 2) {
                                let end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.path.push(reader.int32());
                            } else
                                message.path.push(reader.int32());
                            break;
                        case 2:
                            message.sourceFile = reader.string();
                            break;
                        case 3:
                            message.begin = reader.int32();
                            break;
                        case 4:
                            message.end = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Annotation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Annotation message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Annotation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.path != null && message.hasOwnProperty("path")) {
                        if (!Array.isArray(message.path))
                            return "path: array expected";
                        for (let i = 0; i < message.path.length; ++i)
                            if (!$util.isInteger(message.path[i]))
                                return "path: integer[] expected";
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        if (!$util.isString(message.sourceFile))
                            return "sourceFile: string expected";
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        if (!$util.isInteger(message.begin))
                            return "begin: integer expected";
                    if (message.end != null && message.hasOwnProperty("end"))
                        if (!$util.isInteger(message.end))
                            return "end: integer expected";
                    return null;
                };

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                 */
                Annotation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                        return object;
                    let message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                    if (object.path) {
                        if (!Array.isArray(object.path))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                        message.path = [];
                        for (let i = 0; i < object.path.length; ++i)
                            message.path[i] = object.path[i] | 0;
                    }
                    if (object.sourceFile != null)
                        message.sourceFile = String(object.sourceFile);
                    if (object.begin != null)
                        message.begin = object.begin | 0;
                    if (object.end != null)
                        message.end = object.end | 0;
                    return message;
                };

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Annotation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.path = [];
                    if (options.defaults) {
                        object.sourceFile = "";
                        object.begin = 0;
                        object.end = 0;
                    }
                    if (message.path && message.path.length) {
                        object.path = [];
                        for (let j = 0; j < message.path.length; ++j)
                            object.path[j] = message.path[j];
                    }
                    if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                        object.sourceFile = message.sourceFile;
                    if (message.begin != null && message.hasOwnProperty("begin"))
                        object.begin = message.begin;
                    if (message.end != null && message.hasOwnProperty("end"))
                        object.end = message.end;
                    return object;
                };

                /**
                 * Converts this Annotation to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Annotation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Annotation;
            })();

            return GeneratedCodeInfo;
        })();

        return protobuf;
    })();

    return google;
})();

export const gogoproto = $root.gogoproto = (() => {

    /**
     * Namespace gogoproto.
     * @exports gogoproto
     * @namespace
     */
    const gogoproto = {};

    return gogoproto;
})();

export const prometheus = $root.prometheus = (() => {

    /**
     * Namespace prometheus.
     * @exports prometheus
     * @namespace
     */
    const prometheus = {};

    prometheus.WriteRequest = (function() {

        /**
         * Properties of a WriteRequest.
         * @memberof prometheus
         * @interface IWriteRequest
         * @property {Array.<prometheus.ITimeSeries>|null} [timeseries] WriteRequest timeseries
         * @property {Array.<prometheus.IMetricMetadata>|null} [metadata] WriteRequest metadata
         */

        /**
         * Constructs a new WriteRequest.
         * @memberof prometheus
         * @classdesc Represents a WriteRequest.
         * @implements IWriteRequest
         * @constructor
         * @param {prometheus.IWriteRequest=} [properties] Properties to set
         */
        function WriteRequest(properties) {
            this.timeseries = [];
            this.metadata = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WriteRequest timeseries.
         * @member {Array.<prometheus.ITimeSeries>} timeseries
         * @memberof prometheus.WriteRequest
         * @instance
         */
        WriteRequest.prototype.timeseries = $util.emptyArray;

        /**
         * WriteRequest metadata.
         * @member {Array.<prometheus.IMetricMetadata>} metadata
         * @memberof prometheus.WriteRequest
         * @instance
         */
        WriteRequest.prototype.metadata = $util.emptyArray;

        /**
         * Creates a new WriteRequest instance using the specified properties.
         * @function create
         * @memberof prometheus.WriteRequest
         * @static
         * @param {prometheus.IWriteRequest=} [properties] Properties to set
         * @returns {prometheus.WriteRequest} WriteRequest instance
         */
        WriteRequest.create = function create(properties) {
            return new WriteRequest(properties);
        };

        /**
         * Encodes the specified WriteRequest message. Does not implicitly {@link prometheus.WriteRequest.verify|verify} messages.
         * @function encode
         * @memberof prometheus.WriteRequest
         * @static
         * @param {prometheus.IWriteRequest} message WriteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timeseries != null && message.timeseries.length)
                for (let i = 0; i < message.timeseries.length; ++i)
                    $root.prometheus.TimeSeries.encode(message.timeseries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.metadata != null && message.metadata.length)
                for (let i = 0; i < message.metadata.length; ++i)
                    $root.prometheus.MetricMetadata.encode(message.metadata[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WriteRequest message, length delimited. Does not implicitly {@link prometheus.WriteRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.WriteRequest
         * @static
         * @param {prometheus.IWriteRequest} message WriteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WriteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.WriteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.WriteRequest} WriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.WriteRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.timeseries && message.timeseries.length))
                        message.timeseries = [];
                    message.timeseries.push($root.prometheus.TimeSeries.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.metadata && message.metadata.length))
                        message.metadata = [];
                    message.metadata.push($root.prometheus.MetricMetadata.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WriteRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.WriteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.WriteRequest} WriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WriteRequest message.
         * @function verify
         * @memberof prometheus.WriteRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WriteRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timeseries != null && message.hasOwnProperty("timeseries")) {
                if (!Array.isArray(message.timeseries))
                    return "timeseries: array expected";
                for (let i = 0; i < message.timeseries.length; ++i) {
                    let error = $root.prometheus.TimeSeries.verify(message.timeseries[i]);
                    if (error)
                        return "timeseries." + error;
                }
            }
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                if (!Array.isArray(message.metadata))
                    return "metadata: array expected";
                for (let i = 0; i < message.metadata.length; ++i) {
                    let error = $root.prometheus.MetricMetadata.verify(message.metadata[i]);
                    if (error)
                        return "metadata." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WriteRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.WriteRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.WriteRequest} WriteRequest
         */
        WriteRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.WriteRequest)
                return object;
            let message = new $root.prometheus.WriteRequest();
            if (object.timeseries) {
                if (!Array.isArray(object.timeseries))
                    throw TypeError(".prometheus.WriteRequest.timeseries: array expected");
                message.timeseries = [];
                for (let i = 0; i < object.timeseries.length; ++i) {
                    if (typeof object.timeseries[i] !== "object")
                        throw TypeError(".prometheus.WriteRequest.timeseries: object expected");
                    message.timeseries[i] = $root.prometheus.TimeSeries.fromObject(object.timeseries[i]);
                }
            }
            if (object.metadata) {
                if (!Array.isArray(object.metadata))
                    throw TypeError(".prometheus.WriteRequest.metadata: array expected");
                message.metadata = [];
                for (let i = 0; i < object.metadata.length; ++i) {
                    if (typeof object.metadata[i] !== "object")
                        throw TypeError(".prometheus.WriteRequest.metadata: object expected");
                    message.metadata[i] = $root.prometheus.MetricMetadata.fromObject(object.metadata[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WriteRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.WriteRequest
         * @static
         * @param {prometheus.WriteRequest} message WriteRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WriteRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.timeseries = [];
                object.metadata = [];
            }
            if (message.timeseries && message.timeseries.length) {
                object.timeseries = [];
                for (let j = 0; j < message.timeseries.length; ++j)
                    object.timeseries[j] = $root.prometheus.TimeSeries.toObject(message.timeseries[j], options);
            }
            if (message.metadata && message.metadata.length) {
                object.metadata = [];
                for (let j = 0; j < message.metadata.length; ++j)
                    object.metadata[j] = $root.prometheus.MetricMetadata.toObject(message.metadata[j], options);
            }
            return object;
        };

        /**
         * Converts this WriteRequest to JSON.
         * @function toJSON
         * @memberof prometheus.WriteRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WriteRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WriteRequest;
    })();

    prometheus.ReadRequest = (function() {

        /**
         * Properties of a ReadRequest.
         * @memberof prometheus
         * @interface IReadRequest
         * @property {Array.<prometheus.IQuery>|null} [queries] ReadRequest queries
         * @property {Array.<prometheus.ReadRequest.ResponseType>|null} [acceptedResponseTypes] ReadRequest acceptedResponseTypes
         */

        /**
         * Constructs a new ReadRequest.
         * @memberof prometheus
         * @classdesc Represents a ReadRequest.
         * @implements IReadRequest
         * @constructor
         * @param {prometheus.IReadRequest=} [properties] Properties to set
         */
        function ReadRequest(properties) {
            this.queries = [];
            this.acceptedResponseTypes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadRequest queries.
         * @member {Array.<prometheus.IQuery>} queries
         * @memberof prometheus.ReadRequest
         * @instance
         */
        ReadRequest.prototype.queries = $util.emptyArray;

        /**
         * ReadRequest acceptedResponseTypes.
         * @member {Array.<prometheus.ReadRequest.ResponseType>} acceptedResponseTypes
         * @memberof prometheus.ReadRequest
         * @instance
         */
        ReadRequest.prototype.acceptedResponseTypes = $util.emptyArray;

        /**
         * Creates a new ReadRequest instance using the specified properties.
         * @function create
         * @memberof prometheus.ReadRequest
         * @static
         * @param {prometheus.IReadRequest=} [properties] Properties to set
         * @returns {prometheus.ReadRequest} ReadRequest instance
         */
        ReadRequest.create = function create(properties) {
            return new ReadRequest(properties);
        };

        /**
         * Encodes the specified ReadRequest message. Does not implicitly {@link prometheus.ReadRequest.verify|verify} messages.
         * @function encode
         * @memberof prometheus.ReadRequest
         * @static
         * @param {prometheus.IReadRequest} message ReadRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.queries != null && message.queries.length)
                for (let i = 0; i < message.queries.length; ++i)
                    $root.prometheus.Query.encode(message.queries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.acceptedResponseTypes != null && message.acceptedResponseTypes.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.acceptedResponseTypes.length; ++i)
                    writer.int32(message.acceptedResponseTypes[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified ReadRequest message, length delimited. Does not implicitly {@link prometheus.ReadRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.ReadRequest
         * @static
         * @param {prometheus.IReadRequest} message ReadRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadRequest message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.ReadRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.ReadRequest} ReadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.ReadRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.queries && message.queries.length))
                        message.queries = [];
                    message.queries.push($root.prometheus.Query.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.acceptedResponseTypes && message.acceptedResponseTypes.length))
                        message.acceptedResponseTypes = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.acceptedResponseTypes.push(reader.int32());
                    } else
                        message.acceptedResponseTypes.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.ReadRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.ReadRequest} ReadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadRequest message.
         * @function verify
         * @memberof prometheus.ReadRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.queries != null && message.hasOwnProperty("queries")) {
                if (!Array.isArray(message.queries))
                    return "queries: array expected";
                for (let i = 0; i < message.queries.length; ++i) {
                    let error = $root.prometheus.Query.verify(message.queries[i]);
                    if (error)
                        return "queries." + error;
                }
            }
            if (message.acceptedResponseTypes != null && message.hasOwnProperty("acceptedResponseTypes")) {
                if (!Array.isArray(message.acceptedResponseTypes))
                    return "acceptedResponseTypes: array expected";
                for (let i = 0; i < message.acceptedResponseTypes.length; ++i)
                    switch (message.acceptedResponseTypes[i]) {
                    default:
                        return "acceptedResponseTypes: enum value[] expected";
                    case 0:
                    case 1:
                        break;
                    }
            }
            return null;
        };

        /**
         * Creates a ReadRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.ReadRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.ReadRequest} ReadRequest
         */
        ReadRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.ReadRequest)
                return object;
            let message = new $root.prometheus.ReadRequest();
            if (object.queries) {
                if (!Array.isArray(object.queries))
                    throw TypeError(".prometheus.ReadRequest.queries: array expected");
                message.queries = [];
                for (let i = 0; i < object.queries.length; ++i) {
                    if (typeof object.queries[i] !== "object")
                        throw TypeError(".prometheus.ReadRequest.queries: object expected");
                    message.queries[i] = $root.prometheus.Query.fromObject(object.queries[i]);
                }
            }
            if (object.acceptedResponseTypes) {
                if (!Array.isArray(object.acceptedResponseTypes))
                    throw TypeError(".prometheus.ReadRequest.acceptedResponseTypes: array expected");
                message.acceptedResponseTypes = [];
                for (let i = 0; i < object.acceptedResponseTypes.length; ++i)
                    switch (object.acceptedResponseTypes[i]) {
                    default:
                    case "SAMPLES":
                    case 0:
                        message.acceptedResponseTypes[i] = 0;
                        break;
                    case "STREAMED_XOR_CHUNKS":
                    case 1:
                        message.acceptedResponseTypes[i] = 1;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a ReadRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.ReadRequest
         * @static
         * @param {prometheus.ReadRequest} message ReadRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.queries = [];
                object.acceptedResponseTypes = [];
            }
            if (message.queries && message.queries.length) {
                object.queries = [];
                for (let j = 0; j < message.queries.length; ++j)
                    object.queries[j] = $root.prometheus.Query.toObject(message.queries[j], options);
            }
            if (message.acceptedResponseTypes && message.acceptedResponseTypes.length) {
                object.acceptedResponseTypes = [];
                for (let j = 0; j < message.acceptedResponseTypes.length; ++j)
                    object.acceptedResponseTypes[j] = options.enums === String ? $root.prometheus.ReadRequest.ResponseType[message.acceptedResponseTypes[j]] : message.acceptedResponseTypes[j];
            }
            return object;
        };

        /**
         * Converts this ReadRequest to JSON.
         * @function toJSON
         * @memberof prometheus.ReadRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ResponseType enum.
         * @name prometheus.ReadRequest.ResponseType
         * @enum {number}
         * @property {number} SAMPLES=0 SAMPLES value
         * @property {number} STREAMED_XOR_CHUNKS=1 STREAMED_XOR_CHUNKS value
         */
        ReadRequest.ResponseType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SAMPLES"] = 0;
            values[valuesById[1] = "STREAMED_XOR_CHUNKS"] = 1;
            return values;
        })();

        return ReadRequest;
    })();

    prometheus.ReadResponse = (function() {

        /**
         * Properties of a ReadResponse.
         * @memberof prometheus
         * @interface IReadResponse
         * @property {Array.<prometheus.IQueryResult>|null} [results] ReadResponse results
         */

        /**
         * Constructs a new ReadResponse.
         * @memberof prometheus
         * @classdesc Represents a ReadResponse.
         * @implements IReadResponse
         * @constructor
         * @param {prometheus.IReadResponse=} [properties] Properties to set
         */
        function ReadResponse(properties) {
            this.results = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadResponse results.
         * @member {Array.<prometheus.IQueryResult>} results
         * @memberof prometheus.ReadResponse
         * @instance
         */
        ReadResponse.prototype.results = $util.emptyArray;

        /**
         * Creates a new ReadResponse instance using the specified properties.
         * @function create
         * @memberof prometheus.ReadResponse
         * @static
         * @param {prometheus.IReadResponse=} [properties] Properties to set
         * @returns {prometheus.ReadResponse} ReadResponse instance
         */
        ReadResponse.create = function create(properties) {
            return new ReadResponse(properties);
        };

        /**
         * Encodes the specified ReadResponse message. Does not implicitly {@link prometheus.ReadResponse.verify|verify} messages.
         * @function encode
         * @memberof prometheus.ReadResponse
         * @static
         * @param {prometheus.IReadResponse} message ReadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.results != null && message.results.length)
                for (let i = 0; i < message.results.length; ++i)
                    $root.prometheus.QueryResult.encode(message.results[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReadResponse message, length delimited. Does not implicitly {@link prometheus.ReadResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.ReadResponse
         * @static
         * @param {prometheus.IReadResponse} message ReadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadResponse message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.ReadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.ReadResponse} ReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.ReadResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push($root.prometheus.QueryResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.ReadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.ReadResponse} ReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadResponse message.
         * @function verify
         * @memberof prometheus.ReadResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (let i = 0; i < message.results.length; ++i) {
                    let error = $root.prometheus.QueryResult.verify(message.results[i]);
                    if (error)
                        return "results." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ReadResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.ReadResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.ReadResponse} ReadResponse
         */
        ReadResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.ReadResponse)
                return object;
            let message = new $root.prometheus.ReadResponse();
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".prometheus.ReadResponse.results: array expected");
                message.results = [];
                for (let i = 0; i < object.results.length; ++i) {
                    if (typeof object.results[i] !== "object")
                        throw TypeError(".prometheus.ReadResponse.results: object expected");
                    message.results[i] = $root.prometheus.QueryResult.fromObject(object.results[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ReadResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.ReadResponse
         * @static
         * @param {prometheus.ReadResponse} message ReadResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (message.results && message.results.length) {
                object.results = [];
                for (let j = 0; j < message.results.length; ++j)
                    object.results[j] = $root.prometheus.QueryResult.toObject(message.results[j], options);
            }
            return object;
        };

        /**
         * Converts this ReadResponse to JSON.
         * @function toJSON
         * @memberof prometheus.ReadResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadResponse;
    })();

    prometheus.Query = (function() {

        /**
         * Properties of a Query.
         * @memberof prometheus
         * @interface IQuery
         * @property {number|Long|null} [startTimestampMs] Query startTimestampMs
         * @property {number|Long|null} [endTimestampMs] Query endTimestampMs
         * @property {Array.<prometheus.ILabelMatcher>|null} [matchers] Query matchers
         * @property {prometheus.IReadHints|null} [hints] Query hints
         */

        /**
         * Constructs a new Query.
         * @memberof prometheus
         * @classdesc Represents a Query.
         * @implements IQuery
         * @constructor
         * @param {prometheus.IQuery=} [properties] Properties to set
         */
        function Query(properties) {
            this.matchers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Query startTimestampMs.
         * @member {number|Long} startTimestampMs
         * @memberof prometheus.Query
         * @instance
         */
        Query.prototype.startTimestampMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Query endTimestampMs.
         * @member {number|Long} endTimestampMs
         * @memberof prometheus.Query
         * @instance
         */
        Query.prototype.endTimestampMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Query matchers.
         * @member {Array.<prometheus.ILabelMatcher>} matchers
         * @memberof prometheus.Query
         * @instance
         */
        Query.prototype.matchers = $util.emptyArray;

        /**
         * Query hints.
         * @member {prometheus.IReadHints|null|undefined} hints
         * @memberof prometheus.Query
         * @instance
         */
        Query.prototype.hints = null;

        /**
         * Creates a new Query instance using the specified properties.
         * @function create
         * @memberof prometheus.Query
         * @static
         * @param {prometheus.IQuery=} [properties] Properties to set
         * @returns {prometheus.Query} Query instance
         */
        Query.create = function create(properties) {
            return new Query(properties);
        };

        /**
         * Encodes the specified Query message. Does not implicitly {@link prometheus.Query.verify|verify} messages.
         * @function encode
         * @memberof prometheus.Query
         * @static
         * @param {prometheus.IQuery} message Query message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Query.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startTimestampMs != null && Object.hasOwnProperty.call(message, "startTimestampMs"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.startTimestampMs);
            if (message.endTimestampMs != null && Object.hasOwnProperty.call(message, "endTimestampMs"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.endTimestampMs);
            if (message.matchers != null && message.matchers.length)
                for (let i = 0; i < message.matchers.length; ++i)
                    $root.prometheus.LabelMatcher.encode(message.matchers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.hints != null && Object.hasOwnProperty.call(message, "hints"))
                $root.prometheus.ReadHints.encode(message.hints, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Query message, length delimited. Does not implicitly {@link prometheus.Query.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.Query
         * @static
         * @param {prometheus.IQuery} message Query message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Query.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Query message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.Query
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.Query} Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Query.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.Query();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.startTimestampMs = reader.int64();
                    break;
                case 2:
                    message.endTimestampMs = reader.int64();
                    break;
                case 3:
                    if (!(message.matchers && message.matchers.length))
                        message.matchers = [];
                    message.matchers.push($root.prometheus.LabelMatcher.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.hints = $root.prometheus.ReadHints.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Query message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.Query
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.Query} Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Query.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Query message.
         * @function verify
         * @memberof prometheus.Query
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Query.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.startTimestampMs != null && message.hasOwnProperty("startTimestampMs"))
                if (!$util.isInteger(message.startTimestampMs) && !(message.startTimestampMs && $util.isInteger(message.startTimestampMs.low) && $util.isInteger(message.startTimestampMs.high)))
                    return "startTimestampMs: integer|Long expected";
            if (message.endTimestampMs != null && message.hasOwnProperty("endTimestampMs"))
                if (!$util.isInteger(message.endTimestampMs) && !(message.endTimestampMs && $util.isInteger(message.endTimestampMs.low) && $util.isInteger(message.endTimestampMs.high)))
                    return "endTimestampMs: integer|Long expected";
            if (message.matchers != null && message.hasOwnProperty("matchers")) {
                if (!Array.isArray(message.matchers))
                    return "matchers: array expected";
                for (let i = 0; i < message.matchers.length; ++i) {
                    let error = $root.prometheus.LabelMatcher.verify(message.matchers[i]);
                    if (error)
                        return "matchers." + error;
                }
            }
            if (message.hints != null && message.hasOwnProperty("hints")) {
                let error = $root.prometheus.ReadHints.verify(message.hints);
                if (error)
                    return "hints." + error;
            }
            return null;
        };

        /**
         * Creates a Query message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.Query
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.Query} Query
         */
        Query.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.Query)
                return object;
            let message = new $root.prometheus.Query();
            if (object.startTimestampMs != null)
                if ($util.Long)
                    (message.startTimestampMs = $util.Long.fromValue(object.startTimestampMs)).unsigned = false;
                else if (typeof object.startTimestampMs === "string")
                    message.startTimestampMs = parseInt(object.startTimestampMs, 10);
                else if (typeof object.startTimestampMs === "number")
                    message.startTimestampMs = object.startTimestampMs;
                else if (typeof object.startTimestampMs === "object")
                    message.startTimestampMs = new $util.LongBits(object.startTimestampMs.low >>> 0, object.startTimestampMs.high >>> 0).toNumber();
            if (object.endTimestampMs != null)
                if ($util.Long)
                    (message.endTimestampMs = $util.Long.fromValue(object.endTimestampMs)).unsigned = false;
                else if (typeof object.endTimestampMs === "string")
                    message.endTimestampMs = parseInt(object.endTimestampMs, 10);
                else if (typeof object.endTimestampMs === "number")
                    message.endTimestampMs = object.endTimestampMs;
                else if (typeof object.endTimestampMs === "object")
                    message.endTimestampMs = new $util.LongBits(object.endTimestampMs.low >>> 0, object.endTimestampMs.high >>> 0).toNumber();
            if (object.matchers) {
                if (!Array.isArray(object.matchers))
                    throw TypeError(".prometheus.Query.matchers: array expected");
                message.matchers = [];
                for (let i = 0; i < object.matchers.length; ++i) {
                    if (typeof object.matchers[i] !== "object")
                        throw TypeError(".prometheus.Query.matchers: object expected");
                    message.matchers[i] = $root.prometheus.LabelMatcher.fromObject(object.matchers[i]);
                }
            }
            if (object.hints != null) {
                if (typeof object.hints !== "object")
                    throw TypeError(".prometheus.Query.hints: object expected");
                message.hints = $root.prometheus.ReadHints.fromObject(object.hints);
            }
            return message;
        };

        /**
         * Creates a plain object from a Query message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.Query
         * @static
         * @param {prometheus.Query} message Query
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Query.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.matchers = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.startTimestampMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTimestampMs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.endTimestampMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endTimestampMs = options.longs === String ? "0" : 0;
                object.hints = null;
            }
            if (message.startTimestampMs != null && message.hasOwnProperty("startTimestampMs"))
                if (typeof message.startTimestampMs === "number")
                    object.startTimestampMs = options.longs === String ? String(message.startTimestampMs) : message.startTimestampMs;
                else
                    object.startTimestampMs = options.longs === String ? $util.Long.prototype.toString.call(message.startTimestampMs) : options.longs === Number ? new $util.LongBits(message.startTimestampMs.low >>> 0, message.startTimestampMs.high >>> 0).toNumber() : message.startTimestampMs;
            if (message.endTimestampMs != null && message.hasOwnProperty("endTimestampMs"))
                if (typeof message.endTimestampMs === "number")
                    object.endTimestampMs = options.longs === String ? String(message.endTimestampMs) : message.endTimestampMs;
                else
                    object.endTimestampMs = options.longs === String ? $util.Long.prototype.toString.call(message.endTimestampMs) : options.longs === Number ? new $util.LongBits(message.endTimestampMs.low >>> 0, message.endTimestampMs.high >>> 0).toNumber() : message.endTimestampMs;
            if (message.matchers && message.matchers.length) {
                object.matchers = [];
                for (let j = 0; j < message.matchers.length; ++j)
                    object.matchers[j] = $root.prometheus.LabelMatcher.toObject(message.matchers[j], options);
            }
            if (message.hints != null && message.hasOwnProperty("hints"))
                object.hints = $root.prometheus.ReadHints.toObject(message.hints, options);
            return object;
        };

        /**
         * Converts this Query to JSON.
         * @function toJSON
         * @memberof prometheus.Query
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Query.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Query;
    })();

    prometheus.QueryResult = (function() {

        /**
         * Properties of a QueryResult.
         * @memberof prometheus
         * @interface IQueryResult
         * @property {Array.<prometheus.ITimeSeries>|null} [timeseries] QueryResult timeseries
         */

        /**
         * Constructs a new QueryResult.
         * @memberof prometheus
         * @classdesc Represents a QueryResult.
         * @implements IQueryResult
         * @constructor
         * @param {prometheus.IQueryResult=} [properties] Properties to set
         */
        function QueryResult(properties) {
            this.timeseries = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryResult timeseries.
         * @member {Array.<prometheus.ITimeSeries>} timeseries
         * @memberof prometheus.QueryResult
         * @instance
         */
        QueryResult.prototype.timeseries = $util.emptyArray;

        /**
         * Creates a new QueryResult instance using the specified properties.
         * @function create
         * @memberof prometheus.QueryResult
         * @static
         * @param {prometheus.IQueryResult=} [properties] Properties to set
         * @returns {prometheus.QueryResult} QueryResult instance
         */
        QueryResult.create = function create(properties) {
            return new QueryResult(properties);
        };

        /**
         * Encodes the specified QueryResult message. Does not implicitly {@link prometheus.QueryResult.verify|verify} messages.
         * @function encode
         * @memberof prometheus.QueryResult
         * @static
         * @param {prometheus.IQueryResult} message QueryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timeseries != null && message.timeseries.length)
                for (let i = 0; i < message.timeseries.length; ++i)
                    $root.prometheus.TimeSeries.encode(message.timeseries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified QueryResult message, length delimited. Does not implicitly {@link prometheus.QueryResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.QueryResult
         * @static
         * @param {prometheus.IQueryResult} message QueryResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryResult message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.QueryResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.QueryResult} QueryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.QueryResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.timeseries && message.timeseries.length))
                        message.timeseries = [];
                    message.timeseries.push($root.prometheus.TimeSeries.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QueryResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.QueryResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.QueryResult} QueryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryResult message.
         * @function verify
         * @memberof prometheus.QueryResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QueryResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timeseries != null && message.hasOwnProperty("timeseries")) {
                if (!Array.isArray(message.timeseries))
                    return "timeseries: array expected";
                for (let i = 0; i < message.timeseries.length; ++i) {
                    let error = $root.prometheus.TimeSeries.verify(message.timeseries[i]);
                    if (error)
                        return "timeseries." + error;
                }
            }
            return null;
        };

        /**
         * Creates a QueryResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.QueryResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.QueryResult} QueryResult
         */
        QueryResult.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.QueryResult)
                return object;
            let message = new $root.prometheus.QueryResult();
            if (object.timeseries) {
                if (!Array.isArray(object.timeseries))
                    throw TypeError(".prometheus.QueryResult.timeseries: array expected");
                message.timeseries = [];
                for (let i = 0; i < object.timeseries.length; ++i) {
                    if (typeof object.timeseries[i] !== "object")
                        throw TypeError(".prometheus.QueryResult.timeseries: object expected");
                    message.timeseries[i] = $root.prometheus.TimeSeries.fromObject(object.timeseries[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a QueryResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.QueryResult
         * @static
         * @param {prometheus.QueryResult} message QueryResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.timeseries = [];
            if (message.timeseries && message.timeseries.length) {
                object.timeseries = [];
                for (let j = 0; j < message.timeseries.length; ++j)
                    object.timeseries[j] = $root.prometheus.TimeSeries.toObject(message.timeseries[j], options);
            }
            return object;
        };

        /**
         * Converts this QueryResult to JSON.
         * @function toJSON
         * @memberof prometheus.QueryResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QueryResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QueryResult;
    })();

    prometheus.ChunkedReadResponse = (function() {

        /**
         * Properties of a ChunkedReadResponse.
         * @memberof prometheus
         * @interface IChunkedReadResponse
         * @property {Array.<prometheus.IChunkedSeries>|null} [chunkedSeries] ChunkedReadResponse chunkedSeries
         * @property {number|Long|null} [queryIndex] ChunkedReadResponse queryIndex
         */

        /**
         * Constructs a new ChunkedReadResponse.
         * @memberof prometheus
         * @classdesc Represents a ChunkedReadResponse.
         * @implements IChunkedReadResponse
         * @constructor
         * @param {prometheus.IChunkedReadResponse=} [properties] Properties to set
         */
        function ChunkedReadResponse(properties) {
            this.chunkedSeries = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChunkedReadResponse chunkedSeries.
         * @member {Array.<prometheus.IChunkedSeries>} chunkedSeries
         * @memberof prometheus.ChunkedReadResponse
         * @instance
         */
        ChunkedReadResponse.prototype.chunkedSeries = $util.emptyArray;

        /**
         * ChunkedReadResponse queryIndex.
         * @member {number|Long} queryIndex
         * @memberof prometheus.ChunkedReadResponse
         * @instance
         */
        ChunkedReadResponse.prototype.queryIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ChunkedReadResponse instance using the specified properties.
         * @function create
         * @memberof prometheus.ChunkedReadResponse
         * @static
         * @param {prometheus.IChunkedReadResponse=} [properties] Properties to set
         * @returns {prometheus.ChunkedReadResponse} ChunkedReadResponse instance
         */
        ChunkedReadResponse.create = function create(properties) {
            return new ChunkedReadResponse(properties);
        };

        /**
         * Encodes the specified ChunkedReadResponse message. Does not implicitly {@link prometheus.ChunkedReadResponse.verify|verify} messages.
         * @function encode
         * @memberof prometheus.ChunkedReadResponse
         * @static
         * @param {prometheus.IChunkedReadResponse} message ChunkedReadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunkedReadResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chunkedSeries != null && message.chunkedSeries.length)
                for (let i = 0; i < message.chunkedSeries.length; ++i)
                    $root.prometheus.ChunkedSeries.encode(message.chunkedSeries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.queryIndex != null && Object.hasOwnProperty.call(message, "queryIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.queryIndex);
            return writer;
        };

        /**
         * Encodes the specified ChunkedReadResponse message, length delimited. Does not implicitly {@link prometheus.ChunkedReadResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.ChunkedReadResponse
         * @static
         * @param {prometheus.IChunkedReadResponse} message ChunkedReadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunkedReadResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChunkedReadResponse message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.ChunkedReadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.ChunkedReadResponse} ChunkedReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunkedReadResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.ChunkedReadResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.chunkedSeries && message.chunkedSeries.length))
                        message.chunkedSeries = [];
                    message.chunkedSeries.push($root.prometheus.ChunkedSeries.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.queryIndex = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChunkedReadResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.ChunkedReadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.ChunkedReadResponse} ChunkedReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunkedReadResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChunkedReadResponse message.
         * @function verify
         * @memberof prometheus.ChunkedReadResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChunkedReadResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chunkedSeries != null && message.hasOwnProperty("chunkedSeries")) {
                if (!Array.isArray(message.chunkedSeries))
                    return "chunkedSeries: array expected";
                for (let i = 0; i < message.chunkedSeries.length; ++i) {
                    let error = $root.prometheus.ChunkedSeries.verify(message.chunkedSeries[i]);
                    if (error)
                        return "chunkedSeries." + error;
                }
            }
            if (message.queryIndex != null && message.hasOwnProperty("queryIndex"))
                if (!$util.isInteger(message.queryIndex) && !(message.queryIndex && $util.isInteger(message.queryIndex.low) && $util.isInteger(message.queryIndex.high)))
                    return "queryIndex: integer|Long expected";
            return null;
        };

        /**
         * Creates a ChunkedReadResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.ChunkedReadResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.ChunkedReadResponse} ChunkedReadResponse
         */
        ChunkedReadResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.ChunkedReadResponse)
                return object;
            let message = new $root.prometheus.ChunkedReadResponse();
            if (object.chunkedSeries) {
                if (!Array.isArray(object.chunkedSeries))
                    throw TypeError(".prometheus.ChunkedReadResponse.chunkedSeries: array expected");
                message.chunkedSeries = [];
                for (let i = 0; i < object.chunkedSeries.length; ++i) {
                    if (typeof object.chunkedSeries[i] !== "object")
                        throw TypeError(".prometheus.ChunkedReadResponse.chunkedSeries: object expected");
                    message.chunkedSeries[i] = $root.prometheus.ChunkedSeries.fromObject(object.chunkedSeries[i]);
                }
            }
            if (object.queryIndex != null)
                if ($util.Long)
                    (message.queryIndex = $util.Long.fromValue(object.queryIndex)).unsigned = false;
                else if (typeof object.queryIndex === "string")
                    message.queryIndex = parseInt(object.queryIndex, 10);
                else if (typeof object.queryIndex === "number")
                    message.queryIndex = object.queryIndex;
                else if (typeof object.queryIndex === "object")
                    message.queryIndex = new $util.LongBits(object.queryIndex.low >>> 0, object.queryIndex.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ChunkedReadResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.ChunkedReadResponse
         * @static
         * @param {prometheus.ChunkedReadResponse} message ChunkedReadResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChunkedReadResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.chunkedSeries = [];
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.queryIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.queryIndex = options.longs === String ? "0" : 0;
            if (message.chunkedSeries && message.chunkedSeries.length) {
                object.chunkedSeries = [];
                for (let j = 0; j < message.chunkedSeries.length; ++j)
                    object.chunkedSeries[j] = $root.prometheus.ChunkedSeries.toObject(message.chunkedSeries[j], options);
            }
            if (message.queryIndex != null && message.hasOwnProperty("queryIndex"))
                if (typeof message.queryIndex === "number")
                    object.queryIndex = options.longs === String ? String(message.queryIndex) : message.queryIndex;
                else
                    object.queryIndex = options.longs === String ? $util.Long.prototype.toString.call(message.queryIndex) : options.longs === Number ? new $util.LongBits(message.queryIndex.low >>> 0, message.queryIndex.high >>> 0).toNumber() : message.queryIndex;
            return object;
        };

        /**
         * Converts this ChunkedReadResponse to JSON.
         * @function toJSON
         * @memberof prometheus.ChunkedReadResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChunkedReadResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChunkedReadResponse;
    })();

    prometheus.MetricMetadata = (function() {

        /**
         * Properties of a MetricMetadata.
         * @memberof prometheus
         * @interface IMetricMetadata
         * @property {prometheus.MetricMetadata.MetricType|null} [type] MetricMetadata type
         * @property {string|null} [metricFamilyName] MetricMetadata metricFamilyName
         * @property {string|null} [help] MetricMetadata help
         * @property {string|null} [unit] MetricMetadata unit
         */

        /**
         * Constructs a new MetricMetadata.
         * @memberof prometheus
         * @classdesc Represents a MetricMetadata.
         * @implements IMetricMetadata
         * @constructor
         * @param {prometheus.IMetricMetadata=} [properties] Properties to set
         */
        function MetricMetadata(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MetricMetadata type.
         * @member {prometheus.MetricMetadata.MetricType} type
         * @memberof prometheus.MetricMetadata
         * @instance
         */
        MetricMetadata.prototype.type = 0;

        /**
         * MetricMetadata metricFamilyName.
         * @member {string} metricFamilyName
         * @memberof prometheus.MetricMetadata
         * @instance
         */
        MetricMetadata.prototype.metricFamilyName = "";

        /**
         * MetricMetadata help.
         * @member {string} help
         * @memberof prometheus.MetricMetadata
         * @instance
         */
        MetricMetadata.prototype.help = "";

        /**
         * MetricMetadata unit.
         * @member {string} unit
         * @memberof prometheus.MetricMetadata
         * @instance
         */
        MetricMetadata.prototype.unit = "";

        /**
         * Creates a new MetricMetadata instance using the specified properties.
         * @function create
         * @memberof prometheus.MetricMetadata
         * @static
         * @param {prometheus.IMetricMetadata=} [properties] Properties to set
         * @returns {prometheus.MetricMetadata} MetricMetadata instance
         */
        MetricMetadata.create = function create(properties) {
            return new MetricMetadata(properties);
        };

        /**
         * Encodes the specified MetricMetadata message. Does not implicitly {@link prometheus.MetricMetadata.verify|verify} messages.
         * @function encode
         * @memberof prometheus.MetricMetadata
         * @static
         * @param {prometheus.IMetricMetadata} message MetricMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MetricMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.metricFamilyName != null && Object.hasOwnProperty.call(message, "metricFamilyName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.metricFamilyName);
            if (message.help != null && Object.hasOwnProperty.call(message, "help"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.help);
            if (message.unit != null && Object.hasOwnProperty.call(message, "unit"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.unit);
            return writer;
        };

        /**
         * Encodes the specified MetricMetadata message, length delimited. Does not implicitly {@link prometheus.MetricMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.MetricMetadata
         * @static
         * @param {prometheus.IMetricMetadata} message MetricMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MetricMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MetricMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.MetricMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.MetricMetadata} MetricMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MetricMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.MetricMetadata();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.metricFamilyName = reader.string();
                    break;
                case 4:
                    message.help = reader.string();
                    break;
                case 5:
                    message.unit = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MetricMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.MetricMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.MetricMetadata} MetricMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MetricMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MetricMetadata message.
         * @function verify
         * @memberof prometheus.MetricMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MetricMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.metricFamilyName != null && message.hasOwnProperty("metricFamilyName"))
                if (!$util.isString(message.metricFamilyName))
                    return "metricFamilyName: string expected";
            if (message.help != null && message.hasOwnProperty("help"))
                if (!$util.isString(message.help))
                    return "help: string expected";
            if (message.unit != null && message.hasOwnProperty("unit"))
                if (!$util.isString(message.unit))
                    return "unit: string expected";
            return null;
        };

        /**
         * Creates a MetricMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.MetricMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.MetricMetadata} MetricMetadata
         */
        MetricMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.MetricMetadata)
                return object;
            let message = new $root.prometheus.MetricMetadata();
            switch (object.type) {
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "COUNTER":
            case 1:
                message.type = 1;
                break;
            case "GAUGE":
            case 2:
                message.type = 2;
                break;
            case "HISTOGRAM":
            case 3:
                message.type = 3;
                break;
            case "GAUGEHISTOGRAM":
            case 4:
                message.type = 4;
                break;
            case "SUMMARY":
            case 5:
                message.type = 5;
                break;
            case "INFO":
            case 6:
                message.type = 6;
                break;
            case "STATESET":
            case 7:
                message.type = 7;
                break;
            }
            if (object.metricFamilyName != null)
                message.metricFamilyName = String(object.metricFamilyName);
            if (object.help != null)
                message.help = String(object.help);
            if (object.unit != null)
                message.unit = String(object.unit);
            return message;
        };

        /**
         * Creates a plain object from a MetricMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.MetricMetadata
         * @static
         * @param {prometheus.MetricMetadata} message MetricMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MetricMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "UNKNOWN" : 0;
                object.metricFamilyName = "";
                object.help = "";
                object.unit = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.prometheus.MetricMetadata.MetricType[message.type] : message.type;
            if (message.metricFamilyName != null && message.hasOwnProperty("metricFamilyName"))
                object.metricFamilyName = message.metricFamilyName;
            if (message.help != null && message.hasOwnProperty("help"))
                object.help = message.help;
            if (message.unit != null && message.hasOwnProperty("unit"))
                object.unit = message.unit;
            return object;
        };

        /**
         * Converts this MetricMetadata to JSON.
         * @function toJSON
         * @memberof prometheus.MetricMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MetricMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MetricType enum.
         * @name prometheus.MetricMetadata.MetricType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} COUNTER=1 COUNTER value
         * @property {number} GAUGE=2 GAUGE value
         * @property {number} HISTOGRAM=3 HISTOGRAM value
         * @property {number} GAUGEHISTOGRAM=4 GAUGEHISTOGRAM value
         * @property {number} SUMMARY=5 SUMMARY value
         * @property {number} INFO=6 INFO value
         * @property {number} STATESET=7 STATESET value
         */
        MetricMetadata.MetricType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "COUNTER"] = 1;
            values[valuesById[2] = "GAUGE"] = 2;
            values[valuesById[3] = "HISTOGRAM"] = 3;
            values[valuesById[4] = "GAUGEHISTOGRAM"] = 4;
            values[valuesById[5] = "SUMMARY"] = 5;
            values[valuesById[6] = "INFO"] = 6;
            values[valuesById[7] = "STATESET"] = 7;
            return values;
        })();

        return MetricMetadata;
    })();

    prometheus.Sample = (function() {

        /**
         * Properties of a Sample.
         * @memberof prometheus
         * @interface ISample
         * @property {number|null} [value] Sample value
         * @property {number|Long|null} [timestamp] Sample timestamp
         */

        /**
         * Constructs a new Sample.
         * @memberof prometheus
         * @classdesc Represents a Sample.
         * @implements ISample
         * @constructor
         * @param {prometheus.ISample=} [properties] Properties to set
         */
        function Sample(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Sample value.
         * @member {number} value
         * @memberof prometheus.Sample
         * @instance
         */
        Sample.prototype.value = 0;

        /**
         * Sample timestamp.
         * @member {number|Long} timestamp
         * @memberof prometheus.Sample
         * @instance
         */
        Sample.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Sample instance using the specified properties.
         * @function create
         * @memberof prometheus.Sample
         * @static
         * @param {prometheus.ISample=} [properties] Properties to set
         * @returns {prometheus.Sample} Sample instance
         */
        Sample.create = function create(properties) {
            return new Sample(properties);
        };

        /**
         * Encodes the specified Sample message. Does not implicitly {@link prometheus.Sample.verify|verify} messages.
         * @function encode
         * @memberof prometheus.Sample
         * @static
         * @param {prometheus.ISample} message Sample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sample.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified Sample message, length delimited. Does not implicitly {@link prometheus.Sample.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.Sample
         * @static
         * @param {prometheus.ISample} message Sample message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Sample.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Sample message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.Sample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.Sample} Sample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sample.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.Sample();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.double();
                    break;
                case 2:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Sample message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.Sample
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.Sample} Sample
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Sample.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Sample message.
         * @function verify
         * @memberof prometheus.Sample
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Sample.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Sample message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.Sample
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.Sample} Sample
         */
        Sample.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.Sample)
                return object;
            let message = new $root.prometheus.Sample();
            if (object.value != null)
                message.value = Number(object.value);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Sample message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.Sample
         * @static
         * @param {prometheus.Sample} message Sample
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Sample.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.value = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this Sample to JSON.
         * @function toJSON
         * @memberof prometheus.Sample
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Sample.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Sample;
    })();

    prometheus.Exemplar = (function() {

        /**
         * Properties of an Exemplar.
         * @memberof prometheus
         * @interface IExemplar
         * @property {Array.<prometheus.ILabel>|null} [labels] Exemplar labels
         * @property {number|null} [value] Exemplar value
         * @property {number|Long|null} [timestamp] Exemplar timestamp
         */

        /**
         * Constructs a new Exemplar.
         * @memberof prometheus
         * @classdesc Represents an Exemplar.
         * @implements IExemplar
         * @constructor
         * @param {prometheus.IExemplar=} [properties] Properties to set
         */
        function Exemplar(properties) {
            this.labels = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Exemplar labels.
         * @member {Array.<prometheus.ILabel>} labels
         * @memberof prometheus.Exemplar
         * @instance
         */
        Exemplar.prototype.labels = $util.emptyArray;

        /**
         * Exemplar value.
         * @member {number} value
         * @memberof prometheus.Exemplar
         * @instance
         */
        Exemplar.prototype.value = 0;

        /**
         * Exemplar timestamp.
         * @member {number|Long} timestamp
         * @memberof prometheus.Exemplar
         * @instance
         */
        Exemplar.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Exemplar instance using the specified properties.
         * @function create
         * @memberof prometheus.Exemplar
         * @static
         * @param {prometheus.IExemplar=} [properties] Properties to set
         * @returns {prometheus.Exemplar} Exemplar instance
         */
        Exemplar.create = function create(properties) {
            return new Exemplar(properties);
        };

        /**
         * Encodes the specified Exemplar message. Does not implicitly {@link prometheus.Exemplar.verify|verify} messages.
         * @function encode
         * @memberof prometheus.Exemplar
         * @static
         * @param {prometheus.IExemplar} message Exemplar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Exemplar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.labels != null && message.labels.length)
                for (let i = 0; i < message.labels.length; ++i)
                    $root.prometheus.Label.encode(message.labels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.value);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified Exemplar message, length delimited. Does not implicitly {@link prometheus.Exemplar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.Exemplar
         * @static
         * @param {prometheus.IExemplar} message Exemplar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Exemplar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Exemplar message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.Exemplar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.Exemplar} Exemplar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Exemplar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.Exemplar();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.labels && message.labels.length))
                        message.labels = [];
                    message.labels.push($root.prometheus.Label.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.value = reader.double();
                    break;
                case 3:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Exemplar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.Exemplar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.Exemplar} Exemplar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Exemplar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Exemplar message.
         * @function verify
         * @memberof prometheus.Exemplar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Exemplar.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (let i = 0; i < message.labels.length; ++i) {
                    let error = $root.prometheus.Label.verify(message.labels[i]);
                    if (error)
                        return "labels." + error;
                }
            }
            if (message.value != null && message.hasOwnProperty("value"))
                if (typeof message.value !== "number")
                    return "value: number expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates an Exemplar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.Exemplar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.Exemplar} Exemplar
         */
        Exemplar.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.Exemplar)
                return object;
            let message = new $root.prometheus.Exemplar();
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".prometheus.Exemplar.labels: array expected");
                message.labels = [];
                for (let i = 0; i < object.labels.length; ++i) {
                    if (typeof object.labels[i] !== "object")
                        throw TypeError(".prometheus.Exemplar.labels: object expected");
                    message.labels[i] = $root.prometheus.Label.fromObject(object.labels[i]);
                }
            }
            if (object.value != null)
                message.value = Number(object.value);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Exemplar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.Exemplar
         * @static
         * @param {prometheus.Exemplar} message Exemplar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Exemplar.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.labels = [];
            if (options.defaults) {
                object.value = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (let j = 0; j < message.labels.length; ++j)
                    object.labels[j] = $root.prometheus.Label.toObject(message.labels[j], options);
            }
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this Exemplar to JSON.
         * @function toJSON
         * @memberof prometheus.Exemplar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Exemplar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Exemplar;
    })();

    prometheus.TimeSeries = (function() {

        /**
         * Properties of a TimeSeries.
         * @memberof prometheus
         * @interface ITimeSeries
         * @property {Array.<prometheus.ILabel>|null} [labels] TimeSeries labels
         * @property {Array.<prometheus.ISample>|null} [samples] TimeSeries samples
         * @property {Array.<prometheus.IExemplar>|null} [exemplars] TimeSeries exemplars
         */

        /**
         * Constructs a new TimeSeries.
         * @memberof prometheus
         * @classdesc Represents a TimeSeries.
         * @implements ITimeSeries
         * @constructor
         * @param {prometheus.ITimeSeries=} [properties] Properties to set
         */
        function TimeSeries(properties) {
            this.labels = [];
            this.samples = [];
            this.exemplars = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimeSeries labels.
         * @member {Array.<prometheus.ILabel>} labels
         * @memberof prometheus.TimeSeries
         * @instance
         */
        TimeSeries.prototype.labels = $util.emptyArray;

        /**
         * TimeSeries samples.
         * @member {Array.<prometheus.ISample>} samples
         * @memberof prometheus.TimeSeries
         * @instance
         */
        TimeSeries.prototype.samples = $util.emptyArray;

        /**
         * TimeSeries exemplars.
         * @member {Array.<prometheus.IExemplar>} exemplars
         * @memberof prometheus.TimeSeries
         * @instance
         */
        TimeSeries.prototype.exemplars = $util.emptyArray;

        /**
         * Creates a new TimeSeries instance using the specified properties.
         * @function create
         * @memberof prometheus.TimeSeries
         * @static
         * @param {prometheus.ITimeSeries=} [properties] Properties to set
         * @returns {prometheus.TimeSeries} TimeSeries instance
         */
        TimeSeries.create = function create(properties) {
            return new TimeSeries(properties);
        };

        /**
         * Encodes the specified TimeSeries message. Does not implicitly {@link prometheus.TimeSeries.verify|verify} messages.
         * @function encode
         * @memberof prometheus.TimeSeries
         * @static
         * @param {prometheus.ITimeSeries} message TimeSeries message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeSeries.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.labels != null && message.labels.length)
                for (let i = 0; i < message.labels.length; ++i)
                    $root.prometheus.Label.encode(message.labels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.samples != null && message.samples.length)
                for (let i = 0; i < message.samples.length; ++i)
                    $root.prometheus.Sample.encode(message.samples[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.exemplars != null && message.exemplars.length)
                for (let i = 0; i < message.exemplars.length; ++i)
                    $root.prometheus.Exemplar.encode(message.exemplars[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TimeSeries message, length delimited. Does not implicitly {@link prometheus.TimeSeries.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.TimeSeries
         * @static
         * @param {prometheus.ITimeSeries} message TimeSeries message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimeSeries.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimeSeries message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.TimeSeries
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.TimeSeries} TimeSeries
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeSeries.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.TimeSeries();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.labels && message.labels.length))
                        message.labels = [];
                    message.labels.push($root.prometheus.Label.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.samples && message.samples.length))
                        message.samples = [];
                    message.samples.push($root.prometheus.Sample.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.exemplars && message.exemplars.length))
                        message.exemplars = [];
                    message.exemplars.push($root.prometheus.Exemplar.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TimeSeries message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.TimeSeries
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.TimeSeries} TimeSeries
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimeSeries.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimeSeries message.
         * @function verify
         * @memberof prometheus.TimeSeries
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimeSeries.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (let i = 0; i < message.labels.length; ++i) {
                    let error = $root.prometheus.Label.verify(message.labels[i]);
                    if (error)
                        return "labels." + error;
                }
            }
            if (message.samples != null && message.hasOwnProperty("samples")) {
                if (!Array.isArray(message.samples))
                    return "samples: array expected";
                for (let i = 0; i < message.samples.length; ++i) {
                    let error = $root.prometheus.Sample.verify(message.samples[i]);
                    if (error)
                        return "samples." + error;
                }
            }
            if (message.exemplars != null && message.hasOwnProperty("exemplars")) {
                if (!Array.isArray(message.exemplars))
                    return "exemplars: array expected";
                for (let i = 0; i < message.exemplars.length; ++i) {
                    let error = $root.prometheus.Exemplar.verify(message.exemplars[i]);
                    if (error)
                        return "exemplars." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TimeSeries message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.TimeSeries
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.TimeSeries} TimeSeries
         */
        TimeSeries.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.TimeSeries)
                return object;
            let message = new $root.prometheus.TimeSeries();
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".prometheus.TimeSeries.labels: array expected");
                message.labels = [];
                for (let i = 0; i < object.labels.length; ++i) {
                    if (typeof object.labels[i] !== "object")
                        throw TypeError(".prometheus.TimeSeries.labels: object expected");
                    message.labels[i] = $root.prometheus.Label.fromObject(object.labels[i]);
                }
            }
            if (object.samples) {
                if (!Array.isArray(object.samples))
                    throw TypeError(".prometheus.TimeSeries.samples: array expected");
                message.samples = [];
                for (let i = 0; i < object.samples.length; ++i) {
                    if (typeof object.samples[i] !== "object")
                        throw TypeError(".prometheus.TimeSeries.samples: object expected");
                    message.samples[i] = $root.prometheus.Sample.fromObject(object.samples[i]);
                }
            }
            if (object.exemplars) {
                if (!Array.isArray(object.exemplars))
                    throw TypeError(".prometheus.TimeSeries.exemplars: array expected");
                message.exemplars = [];
                for (let i = 0; i < object.exemplars.length; ++i) {
                    if (typeof object.exemplars[i] !== "object")
                        throw TypeError(".prometheus.TimeSeries.exemplars: object expected");
                    message.exemplars[i] = $root.prometheus.Exemplar.fromObject(object.exemplars[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TimeSeries message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.TimeSeries
         * @static
         * @param {prometheus.TimeSeries} message TimeSeries
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimeSeries.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.labels = [];
                object.samples = [];
                object.exemplars = [];
            }
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (let j = 0; j < message.labels.length; ++j)
                    object.labels[j] = $root.prometheus.Label.toObject(message.labels[j], options);
            }
            if (message.samples && message.samples.length) {
                object.samples = [];
                for (let j = 0; j < message.samples.length; ++j)
                    object.samples[j] = $root.prometheus.Sample.toObject(message.samples[j], options);
            }
            if (message.exemplars && message.exemplars.length) {
                object.exemplars = [];
                for (let j = 0; j < message.exemplars.length; ++j)
                    object.exemplars[j] = $root.prometheus.Exemplar.toObject(message.exemplars[j], options);
            }
            return object;
        };

        /**
         * Converts this TimeSeries to JSON.
         * @function toJSON
         * @memberof prometheus.TimeSeries
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimeSeries.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimeSeries;
    })();

    prometheus.Label = (function() {

        /**
         * Properties of a Label.
         * @memberof prometheus
         * @interface ILabel
         * @property {string|null} [name] Label name
         * @property {string|null} [value] Label value
         */

        /**
         * Constructs a new Label.
         * @memberof prometheus
         * @classdesc Represents a Label.
         * @implements ILabel
         * @constructor
         * @param {prometheus.ILabel=} [properties] Properties to set
         */
        function Label(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Label name.
         * @member {string} name
         * @memberof prometheus.Label
         * @instance
         */
        Label.prototype.name = "";

        /**
         * Label value.
         * @member {string} value
         * @memberof prometheus.Label
         * @instance
         */
        Label.prototype.value = "";

        /**
         * Creates a new Label instance using the specified properties.
         * @function create
         * @memberof prometheus.Label
         * @static
         * @param {prometheus.ILabel=} [properties] Properties to set
         * @returns {prometheus.Label} Label instance
         */
        Label.create = function create(properties) {
            return new Label(properties);
        };

        /**
         * Encodes the specified Label message. Does not implicitly {@link prometheus.Label.verify|verify} messages.
         * @function encode
         * @memberof prometheus.Label
         * @static
         * @param {prometheus.ILabel} message Label message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Label.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified Label message, length delimited. Does not implicitly {@link prometheus.Label.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.Label
         * @static
         * @param {prometheus.ILabel} message Label message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Label.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Label message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.Label
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.Label} Label
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Label.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.Label();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Label message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.Label
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.Label} Label
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Label.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Label message.
         * @function verify
         * @memberof prometheus.Label
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Label.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a Label message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.Label
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.Label} Label
         */
        Label.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.Label)
                return object;
            let message = new $root.prometheus.Label();
            if (object.name != null)
                message.name = String(object.name);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a Label message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.Label
         * @static
         * @param {prometheus.Label} message Label
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Label.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.value = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Label to JSON.
         * @function toJSON
         * @memberof prometheus.Label
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Label.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Label;
    })();

    prometheus.Labels = (function() {

        /**
         * Properties of a Labels.
         * @memberof prometheus
         * @interface ILabels
         * @property {Array.<prometheus.ILabel>|null} [labels] Labels labels
         */

        /**
         * Constructs a new Labels.
         * @memberof prometheus
         * @classdesc Represents a Labels.
         * @implements ILabels
         * @constructor
         * @param {prometheus.ILabels=} [properties] Properties to set
         */
        function Labels(properties) {
            this.labels = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Labels labels.
         * @member {Array.<prometheus.ILabel>} labels
         * @memberof prometheus.Labels
         * @instance
         */
        Labels.prototype.labels = $util.emptyArray;

        /**
         * Creates a new Labels instance using the specified properties.
         * @function create
         * @memberof prometheus.Labels
         * @static
         * @param {prometheus.ILabels=} [properties] Properties to set
         * @returns {prometheus.Labels} Labels instance
         */
        Labels.create = function create(properties) {
            return new Labels(properties);
        };

        /**
         * Encodes the specified Labels message. Does not implicitly {@link prometheus.Labels.verify|verify} messages.
         * @function encode
         * @memberof prometheus.Labels
         * @static
         * @param {prometheus.ILabels} message Labels message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Labels.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.labels != null && message.labels.length)
                for (let i = 0; i < message.labels.length; ++i)
                    $root.prometheus.Label.encode(message.labels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Labels message, length delimited. Does not implicitly {@link prometheus.Labels.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.Labels
         * @static
         * @param {prometheus.ILabels} message Labels message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Labels.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Labels message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.Labels
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.Labels} Labels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Labels.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.Labels();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.labels && message.labels.length))
                        message.labels = [];
                    message.labels.push($root.prometheus.Label.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Labels message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.Labels
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.Labels} Labels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Labels.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Labels message.
         * @function verify
         * @memberof prometheus.Labels
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Labels.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (let i = 0; i < message.labels.length; ++i) {
                    let error = $root.prometheus.Label.verify(message.labels[i]);
                    if (error)
                        return "labels." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Labels message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.Labels
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.Labels} Labels
         */
        Labels.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.Labels)
                return object;
            let message = new $root.prometheus.Labels();
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".prometheus.Labels.labels: array expected");
                message.labels = [];
                for (let i = 0; i < object.labels.length; ++i) {
                    if (typeof object.labels[i] !== "object")
                        throw TypeError(".prometheus.Labels.labels: object expected");
                    message.labels[i] = $root.prometheus.Label.fromObject(object.labels[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Labels message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.Labels
         * @static
         * @param {prometheus.Labels} message Labels
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Labels.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.labels = [];
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (let j = 0; j < message.labels.length; ++j)
                    object.labels[j] = $root.prometheus.Label.toObject(message.labels[j], options);
            }
            return object;
        };

        /**
         * Converts this Labels to JSON.
         * @function toJSON
         * @memberof prometheus.Labels
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Labels.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Labels;
    })();

    prometheus.LabelMatcher = (function() {

        /**
         * Properties of a LabelMatcher.
         * @memberof prometheus
         * @interface ILabelMatcher
         * @property {prometheus.LabelMatcher.Type|null} [type] LabelMatcher type
         * @property {string|null} [name] LabelMatcher name
         * @property {string|null} [value] LabelMatcher value
         */

        /**
         * Constructs a new LabelMatcher.
         * @memberof prometheus
         * @classdesc Represents a LabelMatcher.
         * @implements ILabelMatcher
         * @constructor
         * @param {prometheus.ILabelMatcher=} [properties] Properties to set
         */
        function LabelMatcher(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LabelMatcher type.
         * @member {prometheus.LabelMatcher.Type} type
         * @memberof prometheus.LabelMatcher
         * @instance
         */
        LabelMatcher.prototype.type = 0;

        /**
         * LabelMatcher name.
         * @member {string} name
         * @memberof prometheus.LabelMatcher
         * @instance
         */
        LabelMatcher.prototype.name = "";

        /**
         * LabelMatcher value.
         * @member {string} value
         * @memberof prometheus.LabelMatcher
         * @instance
         */
        LabelMatcher.prototype.value = "";

        /**
         * Creates a new LabelMatcher instance using the specified properties.
         * @function create
         * @memberof prometheus.LabelMatcher
         * @static
         * @param {prometheus.ILabelMatcher=} [properties] Properties to set
         * @returns {prometheus.LabelMatcher} LabelMatcher instance
         */
        LabelMatcher.create = function create(properties) {
            return new LabelMatcher(properties);
        };

        /**
         * Encodes the specified LabelMatcher message. Does not implicitly {@link prometheus.LabelMatcher.verify|verify} messages.
         * @function encode
         * @memberof prometheus.LabelMatcher
         * @static
         * @param {prometheus.ILabelMatcher} message LabelMatcher message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelMatcher.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified LabelMatcher message, length delimited. Does not implicitly {@link prometheus.LabelMatcher.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.LabelMatcher
         * @static
         * @param {prometheus.ILabelMatcher} message LabelMatcher message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelMatcher.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LabelMatcher message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.LabelMatcher
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.LabelMatcher} LabelMatcher
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelMatcher.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.LabelMatcher();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LabelMatcher message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.LabelMatcher
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.LabelMatcher} LabelMatcher
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelMatcher.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LabelMatcher message.
         * @function verify
         * @memberof prometheus.LabelMatcher
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LabelMatcher.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a LabelMatcher message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.LabelMatcher
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.LabelMatcher} LabelMatcher
         */
        LabelMatcher.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.LabelMatcher)
                return object;
            let message = new $root.prometheus.LabelMatcher();
            switch (object.type) {
            case "EQ":
            case 0:
                message.type = 0;
                break;
            case "NEQ":
            case 1:
                message.type = 1;
                break;
            case "RE":
            case 2:
                message.type = 2;
                break;
            case "NRE":
            case 3:
                message.type = 3;
                break;
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a LabelMatcher message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.LabelMatcher
         * @static
         * @param {prometheus.LabelMatcher} message LabelMatcher
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LabelMatcher.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "EQ" : 0;
                object.name = "";
                object.value = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.prometheus.LabelMatcher.Type[message.type] : message.type;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this LabelMatcher to JSON.
         * @function toJSON
         * @memberof prometheus.LabelMatcher
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LabelMatcher.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @name prometheus.LabelMatcher.Type
         * @enum {number}
         * @property {number} EQ=0 EQ value
         * @property {number} NEQ=1 NEQ value
         * @property {number} RE=2 RE value
         * @property {number} NRE=3 NRE value
         */
        LabelMatcher.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EQ"] = 0;
            values[valuesById[1] = "NEQ"] = 1;
            values[valuesById[2] = "RE"] = 2;
            values[valuesById[3] = "NRE"] = 3;
            return values;
        })();

        return LabelMatcher;
    })();

    prometheus.ReadHints = (function() {

        /**
         * Properties of a ReadHints.
         * @memberof prometheus
         * @interface IReadHints
         * @property {number|Long|null} [stepMs] ReadHints stepMs
         * @property {string|null} [func] ReadHints func
         * @property {number|Long|null} [startMs] ReadHints startMs
         * @property {number|Long|null} [endMs] ReadHints endMs
         * @property {Array.<string>|null} [grouping] ReadHints grouping
         * @property {boolean|null} [by] ReadHints by
         * @property {number|Long|null} [rangeMs] ReadHints rangeMs
         */

        /**
         * Constructs a new ReadHints.
         * @memberof prometheus
         * @classdesc Represents a ReadHints.
         * @implements IReadHints
         * @constructor
         * @param {prometheus.IReadHints=} [properties] Properties to set
         */
        function ReadHints(properties) {
            this.grouping = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadHints stepMs.
         * @member {number|Long} stepMs
         * @memberof prometheus.ReadHints
         * @instance
         */
        ReadHints.prototype.stepMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReadHints func.
         * @member {string} func
         * @memberof prometheus.ReadHints
         * @instance
         */
        ReadHints.prototype.func = "";

        /**
         * ReadHints startMs.
         * @member {number|Long} startMs
         * @memberof prometheus.ReadHints
         * @instance
         */
        ReadHints.prototype.startMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReadHints endMs.
         * @member {number|Long} endMs
         * @memberof prometheus.ReadHints
         * @instance
         */
        ReadHints.prototype.endMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReadHints grouping.
         * @member {Array.<string>} grouping
         * @memberof prometheus.ReadHints
         * @instance
         */
        ReadHints.prototype.grouping = $util.emptyArray;

        /**
         * ReadHints by.
         * @member {boolean} by
         * @memberof prometheus.ReadHints
         * @instance
         */
        ReadHints.prototype.by = false;

        /**
         * ReadHints rangeMs.
         * @member {number|Long} rangeMs
         * @memberof prometheus.ReadHints
         * @instance
         */
        ReadHints.prototype.rangeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReadHints instance using the specified properties.
         * @function create
         * @memberof prometheus.ReadHints
         * @static
         * @param {prometheus.IReadHints=} [properties] Properties to set
         * @returns {prometheus.ReadHints} ReadHints instance
         */
        ReadHints.create = function create(properties) {
            return new ReadHints(properties);
        };

        /**
         * Encodes the specified ReadHints message. Does not implicitly {@link prometheus.ReadHints.verify|verify} messages.
         * @function encode
         * @memberof prometheus.ReadHints
         * @static
         * @param {prometheus.IReadHints} message ReadHints message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadHints.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stepMs != null && Object.hasOwnProperty.call(message, "stepMs"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.stepMs);
            if (message.func != null && Object.hasOwnProperty.call(message, "func"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.func);
            if (message.startMs != null && Object.hasOwnProperty.call(message, "startMs"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.startMs);
            if (message.endMs != null && Object.hasOwnProperty.call(message, "endMs"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.endMs);
            if (message.grouping != null && message.grouping.length)
                for (let i = 0; i < message.grouping.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.grouping[i]);
            if (message.by != null && Object.hasOwnProperty.call(message, "by"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.by);
            if (message.rangeMs != null && Object.hasOwnProperty.call(message, "rangeMs"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.rangeMs);
            return writer;
        };

        /**
         * Encodes the specified ReadHints message, length delimited. Does not implicitly {@link prometheus.ReadHints.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.ReadHints
         * @static
         * @param {prometheus.IReadHints} message ReadHints message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadHints.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadHints message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.ReadHints
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.ReadHints} ReadHints
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadHints.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.ReadHints();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.stepMs = reader.int64();
                    break;
                case 2:
                    message.func = reader.string();
                    break;
                case 3:
                    message.startMs = reader.int64();
                    break;
                case 4:
                    message.endMs = reader.int64();
                    break;
                case 5:
                    if (!(message.grouping && message.grouping.length))
                        message.grouping = [];
                    message.grouping.push(reader.string());
                    break;
                case 6:
                    message.by = reader.bool();
                    break;
                case 7:
                    message.rangeMs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadHints message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.ReadHints
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.ReadHints} ReadHints
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadHints.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadHints message.
         * @function verify
         * @memberof prometheus.ReadHints
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadHints.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stepMs != null && message.hasOwnProperty("stepMs"))
                if (!$util.isInteger(message.stepMs) && !(message.stepMs && $util.isInteger(message.stepMs.low) && $util.isInteger(message.stepMs.high)))
                    return "stepMs: integer|Long expected";
            if (message.func != null && message.hasOwnProperty("func"))
                if (!$util.isString(message.func))
                    return "func: string expected";
            if (message.startMs != null && message.hasOwnProperty("startMs"))
                if (!$util.isInteger(message.startMs) && !(message.startMs && $util.isInteger(message.startMs.low) && $util.isInteger(message.startMs.high)))
                    return "startMs: integer|Long expected";
            if (message.endMs != null && message.hasOwnProperty("endMs"))
                if (!$util.isInteger(message.endMs) && !(message.endMs && $util.isInteger(message.endMs.low) && $util.isInteger(message.endMs.high)))
                    return "endMs: integer|Long expected";
            if (message.grouping != null && message.hasOwnProperty("grouping")) {
                if (!Array.isArray(message.grouping))
                    return "grouping: array expected";
                for (let i = 0; i < message.grouping.length; ++i)
                    if (!$util.isString(message.grouping[i]))
                        return "grouping: string[] expected";
            }
            if (message.by != null && message.hasOwnProperty("by"))
                if (typeof message.by !== "boolean")
                    return "by: boolean expected";
            if (message.rangeMs != null && message.hasOwnProperty("rangeMs"))
                if (!$util.isInteger(message.rangeMs) && !(message.rangeMs && $util.isInteger(message.rangeMs.low) && $util.isInteger(message.rangeMs.high)))
                    return "rangeMs: integer|Long expected";
            return null;
        };

        /**
         * Creates a ReadHints message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.ReadHints
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.ReadHints} ReadHints
         */
        ReadHints.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.ReadHints)
                return object;
            let message = new $root.prometheus.ReadHints();
            if (object.stepMs != null)
                if ($util.Long)
                    (message.stepMs = $util.Long.fromValue(object.stepMs)).unsigned = false;
                else if (typeof object.stepMs === "string")
                    message.stepMs = parseInt(object.stepMs, 10);
                else if (typeof object.stepMs === "number")
                    message.stepMs = object.stepMs;
                else if (typeof object.stepMs === "object")
                    message.stepMs = new $util.LongBits(object.stepMs.low >>> 0, object.stepMs.high >>> 0).toNumber();
            if (object.func != null)
                message.func = String(object.func);
            if (object.startMs != null)
                if ($util.Long)
                    (message.startMs = $util.Long.fromValue(object.startMs)).unsigned = false;
                else if (typeof object.startMs === "string")
                    message.startMs = parseInt(object.startMs, 10);
                else if (typeof object.startMs === "number")
                    message.startMs = object.startMs;
                else if (typeof object.startMs === "object")
                    message.startMs = new $util.LongBits(object.startMs.low >>> 0, object.startMs.high >>> 0).toNumber();
            if (object.endMs != null)
                if ($util.Long)
                    (message.endMs = $util.Long.fromValue(object.endMs)).unsigned = false;
                else if (typeof object.endMs === "string")
                    message.endMs = parseInt(object.endMs, 10);
                else if (typeof object.endMs === "number")
                    message.endMs = object.endMs;
                else if (typeof object.endMs === "object")
                    message.endMs = new $util.LongBits(object.endMs.low >>> 0, object.endMs.high >>> 0).toNumber();
            if (object.grouping) {
                if (!Array.isArray(object.grouping))
                    throw TypeError(".prometheus.ReadHints.grouping: array expected");
                message.grouping = [];
                for (let i = 0; i < object.grouping.length; ++i)
                    message.grouping[i] = String(object.grouping[i]);
            }
            if (object.by != null)
                message.by = Boolean(object.by);
            if (object.rangeMs != null)
                if ($util.Long)
                    (message.rangeMs = $util.Long.fromValue(object.rangeMs)).unsigned = false;
                else if (typeof object.rangeMs === "string")
                    message.rangeMs = parseInt(object.rangeMs, 10);
                else if (typeof object.rangeMs === "number")
                    message.rangeMs = object.rangeMs;
                else if (typeof object.rangeMs === "object")
                    message.rangeMs = new $util.LongBits(object.rangeMs.low >>> 0, object.rangeMs.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ReadHints message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.ReadHints
         * @static
         * @param {prometheus.ReadHints} message ReadHints
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadHints.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.grouping = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.stepMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stepMs = options.longs === String ? "0" : 0;
                object.func = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.startMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startMs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.endMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.endMs = options.longs === String ? "0" : 0;
                object.by = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.rangeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.rangeMs = options.longs === String ? "0" : 0;
            }
            if (message.stepMs != null && message.hasOwnProperty("stepMs"))
                if (typeof message.stepMs === "number")
                    object.stepMs = options.longs === String ? String(message.stepMs) : message.stepMs;
                else
                    object.stepMs = options.longs === String ? $util.Long.prototype.toString.call(message.stepMs) : options.longs === Number ? new $util.LongBits(message.stepMs.low >>> 0, message.stepMs.high >>> 0).toNumber() : message.stepMs;
            if (message.func != null && message.hasOwnProperty("func"))
                object.func = message.func;
            if (message.startMs != null && message.hasOwnProperty("startMs"))
                if (typeof message.startMs === "number")
                    object.startMs = options.longs === String ? String(message.startMs) : message.startMs;
                else
                    object.startMs = options.longs === String ? $util.Long.prototype.toString.call(message.startMs) : options.longs === Number ? new $util.LongBits(message.startMs.low >>> 0, message.startMs.high >>> 0).toNumber() : message.startMs;
            if (message.endMs != null && message.hasOwnProperty("endMs"))
                if (typeof message.endMs === "number")
                    object.endMs = options.longs === String ? String(message.endMs) : message.endMs;
                else
                    object.endMs = options.longs === String ? $util.Long.prototype.toString.call(message.endMs) : options.longs === Number ? new $util.LongBits(message.endMs.low >>> 0, message.endMs.high >>> 0).toNumber() : message.endMs;
            if (message.grouping && message.grouping.length) {
                object.grouping = [];
                for (let j = 0; j < message.grouping.length; ++j)
                    object.grouping[j] = message.grouping[j];
            }
            if (message.by != null && message.hasOwnProperty("by"))
                object.by = message.by;
            if (message.rangeMs != null && message.hasOwnProperty("rangeMs"))
                if (typeof message.rangeMs === "number")
                    object.rangeMs = options.longs === String ? String(message.rangeMs) : message.rangeMs;
                else
                    object.rangeMs = options.longs === String ? $util.Long.prototype.toString.call(message.rangeMs) : options.longs === Number ? new $util.LongBits(message.rangeMs.low >>> 0, message.rangeMs.high >>> 0).toNumber() : message.rangeMs;
            return object;
        };

        /**
         * Converts this ReadHints to JSON.
         * @function toJSON
         * @memberof prometheus.ReadHints
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadHints.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReadHints;
    })();

    prometheus.Chunk = (function() {

        /**
         * Properties of a Chunk.
         * @memberof prometheus
         * @interface IChunk
         * @property {number|Long|null} [minTimeMs] Chunk minTimeMs
         * @property {number|Long|null} [maxTimeMs] Chunk maxTimeMs
         * @property {prometheus.Chunk.Encoding|null} [type] Chunk type
         * @property {Uint8Array|null} [data] Chunk data
         */

        /**
         * Constructs a new Chunk.
         * @memberof prometheus
         * @classdesc Represents a Chunk.
         * @implements IChunk
         * @constructor
         * @param {prometheus.IChunk=} [properties] Properties to set
         */
        function Chunk(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chunk minTimeMs.
         * @member {number|Long} minTimeMs
         * @memberof prometheus.Chunk
         * @instance
         */
        Chunk.prototype.minTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Chunk maxTimeMs.
         * @member {number|Long} maxTimeMs
         * @memberof prometheus.Chunk
         * @instance
         */
        Chunk.prototype.maxTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Chunk type.
         * @member {prometheus.Chunk.Encoding} type
         * @memberof prometheus.Chunk
         * @instance
         */
        Chunk.prototype.type = 0;

        /**
         * Chunk data.
         * @member {Uint8Array} data
         * @memberof prometheus.Chunk
         * @instance
         */
        Chunk.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Chunk instance using the specified properties.
         * @function create
         * @memberof prometheus.Chunk
         * @static
         * @param {prometheus.IChunk=} [properties] Properties to set
         * @returns {prometheus.Chunk} Chunk instance
         */
        Chunk.create = function create(properties) {
            return new Chunk(properties);
        };

        /**
         * Encodes the specified Chunk message. Does not implicitly {@link prometheus.Chunk.verify|verify} messages.
         * @function encode
         * @memberof prometheus.Chunk
         * @static
         * @param {prometheus.IChunk} message Chunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chunk.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.minTimeMs != null && Object.hasOwnProperty.call(message, "minTimeMs"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.minTimeMs);
            if (message.maxTimeMs != null && Object.hasOwnProperty.call(message, "maxTimeMs"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.maxTimeMs);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Chunk message, length delimited. Does not implicitly {@link prometheus.Chunk.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.Chunk
         * @static
         * @param {prometheus.IChunk} message Chunk message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chunk.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chunk message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.Chunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.Chunk} Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chunk.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.Chunk();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.minTimeMs = reader.int64();
                    break;
                case 2:
                    message.maxTimeMs = reader.int64();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Chunk message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.Chunk
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.Chunk} Chunk
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chunk.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Chunk message.
         * @function verify
         * @memberof prometheus.Chunk
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Chunk.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.minTimeMs != null && message.hasOwnProperty("minTimeMs"))
                if (!$util.isInteger(message.minTimeMs) && !(message.minTimeMs && $util.isInteger(message.minTimeMs.low) && $util.isInteger(message.minTimeMs.high)))
                    return "minTimeMs: integer|Long expected";
            if (message.maxTimeMs != null && message.hasOwnProperty("maxTimeMs"))
                if (!$util.isInteger(message.maxTimeMs) && !(message.maxTimeMs && $util.isInteger(message.maxTimeMs.low) && $util.isInteger(message.maxTimeMs.high)))
                    return "maxTimeMs: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a Chunk message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.Chunk
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.Chunk} Chunk
         */
        Chunk.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.Chunk)
                return object;
            let message = new $root.prometheus.Chunk();
            if (object.minTimeMs != null)
                if ($util.Long)
                    (message.minTimeMs = $util.Long.fromValue(object.minTimeMs)).unsigned = false;
                else if (typeof object.minTimeMs === "string")
                    message.minTimeMs = parseInt(object.minTimeMs, 10);
                else if (typeof object.minTimeMs === "number")
                    message.minTimeMs = object.minTimeMs;
                else if (typeof object.minTimeMs === "object")
                    message.minTimeMs = new $util.LongBits(object.minTimeMs.low >>> 0, object.minTimeMs.high >>> 0).toNumber();
            if (object.maxTimeMs != null)
                if ($util.Long)
                    (message.maxTimeMs = $util.Long.fromValue(object.maxTimeMs)).unsigned = false;
                else if (typeof object.maxTimeMs === "string")
                    message.maxTimeMs = parseInt(object.maxTimeMs, 10);
                else if (typeof object.maxTimeMs === "number")
                    message.maxTimeMs = object.maxTimeMs;
                else if (typeof object.maxTimeMs === "object")
                    message.maxTimeMs = new $util.LongBits(object.maxTimeMs.low >>> 0, object.maxTimeMs.high >>> 0).toNumber();
            switch (object.type) {
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "XOR":
            case 1:
                message.type = 1;
                break;
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a Chunk message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.Chunk
         * @static
         * @param {prometheus.Chunk} message Chunk
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Chunk.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.minTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.minTimeMs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.maxTimeMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.maxTimeMs = options.longs === String ? "0" : 0;
                object.type = options.enums === String ? "UNKNOWN" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.minTimeMs != null && message.hasOwnProperty("minTimeMs"))
                if (typeof message.minTimeMs === "number")
                    object.minTimeMs = options.longs === String ? String(message.minTimeMs) : message.minTimeMs;
                else
                    object.minTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.minTimeMs) : options.longs === Number ? new $util.LongBits(message.minTimeMs.low >>> 0, message.minTimeMs.high >>> 0).toNumber() : message.minTimeMs;
            if (message.maxTimeMs != null && message.hasOwnProperty("maxTimeMs"))
                if (typeof message.maxTimeMs === "number")
                    object.maxTimeMs = options.longs === String ? String(message.maxTimeMs) : message.maxTimeMs;
                else
                    object.maxTimeMs = options.longs === String ? $util.Long.prototype.toString.call(message.maxTimeMs) : options.longs === Number ? new $util.LongBits(message.maxTimeMs.low >>> 0, message.maxTimeMs.high >>> 0).toNumber() : message.maxTimeMs;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.prometheus.Chunk.Encoding[message.type] : message.type;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Chunk to JSON.
         * @function toJSON
         * @memberof prometheus.Chunk
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Chunk.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Encoding enum.
         * @name prometheus.Chunk.Encoding
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} XOR=1 XOR value
         */
        Chunk.Encoding = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "XOR"] = 1;
            return values;
        })();

        return Chunk;
    })();

    prometheus.ChunkedSeries = (function() {

        /**
         * Properties of a ChunkedSeries.
         * @memberof prometheus
         * @interface IChunkedSeries
         * @property {Array.<prometheus.ILabel>|null} [labels] ChunkedSeries labels
         * @property {Array.<prometheus.IChunk>|null} [chunks] ChunkedSeries chunks
         */

        /**
         * Constructs a new ChunkedSeries.
         * @memberof prometheus
         * @classdesc Represents a ChunkedSeries.
         * @implements IChunkedSeries
         * @constructor
         * @param {prometheus.IChunkedSeries=} [properties] Properties to set
         */
        function ChunkedSeries(properties) {
            this.labels = [];
            this.chunks = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChunkedSeries labels.
         * @member {Array.<prometheus.ILabel>} labels
         * @memberof prometheus.ChunkedSeries
         * @instance
         */
        ChunkedSeries.prototype.labels = $util.emptyArray;

        /**
         * ChunkedSeries chunks.
         * @member {Array.<prometheus.IChunk>} chunks
         * @memberof prometheus.ChunkedSeries
         * @instance
         */
        ChunkedSeries.prototype.chunks = $util.emptyArray;

        /**
         * Creates a new ChunkedSeries instance using the specified properties.
         * @function create
         * @memberof prometheus.ChunkedSeries
         * @static
         * @param {prometheus.IChunkedSeries=} [properties] Properties to set
         * @returns {prometheus.ChunkedSeries} ChunkedSeries instance
         */
        ChunkedSeries.create = function create(properties) {
            return new ChunkedSeries(properties);
        };

        /**
         * Encodes the specified ChunkedSeries message. Does not implicitly {@link prometheus.ChunkedSeries.verify|verify} messages.
         * @function encode
         * @memberof prometheus.ChunkedSeries
         * @static
         * @param {prometheus.IChunkedSeries} message ChunkedSeries message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunkedSeries.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.labels != null && message.labels.length)
                for (let i = 0; i < message.labels.length; ++i)
                    $root.prometheus.Label.encode(message.labels[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.chunks != null && message.chunks.length)
                for (let i = 0; i < message.chunks.length; ++i)
                    $root.prometheus.Chunk.encode(message.chunks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChunkedSeries message, length delimited. Does not implicitly {@link prometheus.ChunkedSeries.verify|verify} messages.
         * @function encodeDelimited
         * @memberof prometheus.ChunkedSeries
         * @static
         * @param {prometheus.IChunkedSeries} message ChunkedSeries message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunkedSeries.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChunkedSeries message from the specified reader or buffer.
         * @function decode
         * @memberof prometheus.ChunkedSeries
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {prometheus.ChunkedSeries} ChunkedSeries
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunkedSeries.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.prometheus.ChunkedSeries();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.labels && message.labels.length))
                        message.labels = [];
                    message.labels.push($root.prometheus.Label.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.chunks && message.chunks.length))
                        message.chunks = [];
                    message.chunks.push($root.prometheus.Chunk.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChunkedSeries message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof prometheus.ChunkedSeries
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {prometheus.ChunkedSeries} ChunkedSeries
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunkedSeries.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChunkedSeries message.
         * @function verify
         * @memberof prometheus.ChunkedSeries
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChunkedSeries.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (let i = 0; i < message.labels.length; ++i) {
                    let error = $root.prometheus.Label.verify(message.labels[i]);
                    if (error)
                        return "labels." + error;
                }
            }
            if (message.chunks != null && message.hasOwnProperty("chunks")) {
                if (!Array.isArray(message.chunks))
                    return "chunks: array expected";
                for (let i = 0; i < message.chunks.length; ++i) {
                    let error = $root.prometheus.Chunk.verify(message.chunks[i]);
                    if (error)
                        return "chunks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ChunkedSeries message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof prometheus.ChunkedSeries
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {prometheus.ChunkedSeries} ChunkedSeries
         */
        ChunkedSeries.fromObject = function fromObject(object) {
            if (object instanceof $root.prometheus.ChunkedSeries)
                return object;
            let message = new $root.prometheus.ChunkedSeries();
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".prometheus.ChunkedSeries.labels: array expected");
                message.labels = [];
                for (let i = 0; i < object.labels.length; ++i) {
                    if (typeof object.labels[i] !== "object")
                        throw TypeError(".prometheus.ChunkedSeries.labels: object expected");
                    message.labels[i] = $root.prometheus.Label.fromObject(object.labels[i]);
                }
            }
            if (object.chunks) {
                if (!Array.isArray(object.chunks))
                    throw TypeError(".prometheus.ChunkedSeries.chunks: array expected");
                message.chunks = [];
                for (let i = 0; i < object.chunks.length; ++i) {
                    if (typeof object.chunks[i] !== "object")
                        throw TypeError(".prometheus.ChunkedSeries.chunks: object expected");
                    message.chunks[i] = $root.prometheus.Chunk.fromObject(object.chunks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ChunkedSeries message. Also converts values to other types if specified.
         * @function toObject
         * @memberof prometheus.ChunkedSeries
         * @static
         * @param {prometheus.ChunkedSeries} message ChunkedSeries
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChunkedSeries.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.labels = [];
                object.chunks = [];
            }
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (let j = 0; j < message.labels.length; ++j)
                    object.labels[j] = $root.prometheus.Label.toObject(message.labels[j], options);
            }
            if (message.chunks && message.chunks.length) {
                object.chunks = [];
                for (let j = 0; j < message.chunks.length; ++j)
                    object.chunks[j] = $root.prometheus.Chunk.toObject(message.chunks[j], options);
            }
            return object;
        };

        /**
         * Converts this ChunkedSeries to JSON.
         * @function toJSON
         * @memberof prometheus.ChunkedSeries
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChunkedSeries.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChunkedSeries;
    })();

    return prometheus;
})();

export { $root as default };
